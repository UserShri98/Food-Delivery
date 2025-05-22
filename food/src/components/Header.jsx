import { useState } from 'react';
import cuisineIcon from '../assets/cuisine-icon-3.jpg';
import { Link } from 'react-router-dom';

  const Header = () => {
  
     const [btnName,setBtnName]=useState("Login")

    return (

      <div className='header'>
        <div>
          <img src={cuisineIcon} className="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
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