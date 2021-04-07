const puppeteer = require('puppeteer');


puppeteer.launch({ headless: true, args: ['--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"'] }).then(async browser => {
	const page = await browser.newPage();
	await page.goto("https://old.reddit.com/r/wallstreetbets/");
	await page.waitForSelector('body');
    var rposts = await page.evaluate(() => {
        let posts = document.body.querySelectorAll('SHORTCUT_FOCUSABLE_DIV > div:nth-child(4) > div > div > div > div._3ozFtOe6WpJEMUtxDOIvtU > div._1vyLCp-v-tE5QvZovwrASa > div._1OVBBWLtHoSPfGCRaPzpTf._3nSp9cdBpqL13CqjdMr2L_ > div.rpBJOHq2PR60pnwJlUyP0 > div:nth-child(4)');       
        postItems = [];
        posts.forEach((item) => {
            let title = item.querySelector('h3').innerText;
            let description = ''
            try{
            description = item.querySelector('p').innerText;
            }catch(e){
            }
            postItems.push({title: title, description: description});
        });
        
        var items = { 
            "posts": postItems
        };
        return items;
        
    });
    console.log(rposts);
    await browser.close();
}).catch(function(error) {
    console.error(error);
});