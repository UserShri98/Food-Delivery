import { useState } from 'react';
import cuisineIcon from '../assets/cuisine-icon-3.jpg';

  const Header = () => {
  
     const [btnName,setBtnName]=useState("Login")

    return (

      <div className='header'>
        <div>
          <img src={cuisineIcon} className="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
         <button onClick={()=>
         btnName==="Login"? setBtnName("Logout"): setBtnName("Login")}
          >
            {btnName}</button>

          </ul>
        </div>
      </div>
    )
  }

  export default Header;