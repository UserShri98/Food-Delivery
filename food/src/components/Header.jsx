import { useState,useContext } from 'react';
import cuisineIcon from '../assets/cuisine-icon-3.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';



const Header = () => {
  

     const [btnName,setBtnName]=useState("Login")

     const onlineStatus=useOnlineStatus();

     const {loggedUser}=useContext(UserContext)
     
     const CartItems=useSelector((store)=>store.cart.items)
     console.log(CartItems)

    return (

      <div className='flex justify-between bg-pink-100 shadow-lg'>
        <div>
          <img src={cuisineIcon} className="w-40" />
        </div>
        <div className='flex items-center'>
          <ul className='flex p-4 m-4'>
            <li className='px-4'>Online Status:{onlineStatus===true?"🟢":"🔴"}</li>
           <li className='px-4'> <Link to='/'>Home</Link></li>
            <li className='px-4'><Link to='/contact'>Contact</Link></li>
            <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
            <li className='px-4'><Link to='/about'>About</Link></li>
            <li className='px-4 font-bold text-2xl'><Link to='/cart'>Cart-({CartItems.length}items)</Link></li>
         <button onClick={()=>
         btnName==="Login"? setBtnName("Logout"): setBtnName("Login")}
          >
            {btnName}</button>
            <li className='px-4 text-xs'>{loggedUser}</li>

          </ul>
        </div>
      </div>
    )
  }

  export default Header;