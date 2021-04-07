import react from 'react';


export const DropDownMenu = () => {

    const DropDownItem = (props) => {
       return (
           <a href='#' className='menu-item'>
               <span className="icon-button">{props.leftIcon}</span>
               {props.children}
               <span className="icon-rightButton">{props.rightIcon}</span>
           </a>
       ) 
    }
    return (
        <div className="dropdown">
              <DropDownItem leftIcon={"😀"}>DogeCoin</DropDownItem>  
        </div>
    )
}