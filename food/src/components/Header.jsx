import { useState } from 'react';
import cuisineIcon from '../assets/cuisine-icon-3.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
  


const Header = () => {
  

     const [btnName,setBtnName]=useState("Login")

     const onlineStatus=useOnlineStatus();

    return (

      <div className='header'>
        <div>
          <img src={cuisineIcon} className="logo" />
        </div>
        <div className='nav-items'>
          <ul>
            <li>Online Status:{onlineStatus===true?"🟢":"🔴"}</li>
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