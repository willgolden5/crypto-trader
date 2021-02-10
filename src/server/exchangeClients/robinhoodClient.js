var robinhood = require('robinhood')

let credentials = {
    username: '',
    password: ''
};

let Robinhood = robinhood(credentials, (data)=> {
    if (data && data.mfa_required) {
        let mfa_code = '123456'; // set mfa_code here

        Robinhood.set_mfa_code(mfa_code, () => {
            console.log(Robinhood.auth_token());
        });
    }
    else {
        console.log(Robinhood.auth_token());
    }
})

Robinhood.sp500_up(function(err, res, body) {
    if(err){
        console.error(err);
    }else{
        console.log("investment_profile");
        console.log(body);
            //    { annual_income: '25000_39999',
            //      investment_experience: 'no_investment_exp',
            //      updated_at: '2015-06-24T17:14:53.593009Z',
            //      risk_tolerance: 'low_risk_tolerance',
            //      total_net_worth: '0_24999',
            //      liquidity_needs: 'very_important_liq_need',
            //      investment_objective: 'income_invest_obj',
            //      source_of_funds: 'savings_personal_income',
            //      user: 'https://api.robinhood.com/user/',
            //      suitability_verified: true,
            //      tax_bracket: '',
            //      time_horizon: 'short_time_horizon',
            //      liquid_net_worth: '0_24999' }

    }
})

