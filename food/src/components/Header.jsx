import { useState, useContext } from 'react';
import cuisineIcon from '../assets/cuisine-icon-3.jpg';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 transition-all duration-200">
        
        <div className="flex items-center gap-4 mb-4 md:mb-0">
          <img
            src={cuisineIcon}
            alt="Cuisine Logo"
            className="w-14 md:w-20 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
          <Link to="/" className="text-3xl font-extrabold text-green-700 hover:text-green-800 transition hidden sm:block">
            Food<span className="text-yellow-500">App</span>
          </Link>
        </div>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-4 text-gray-800 font-semibold text-sm md:text-base">
            
            <li className="flex items-center gap-1 text-sm text-gray-500">
              <span className="text-xl">{onlineStatus ? "🟢" : "🔴"}</span>
              <span className="hidden sm:inline">Online</span>
            </li>

            <li>
              <Link to="/" className="hover:text-green-600 transition duration-200">Home</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-600 transition duration-200">Contact</Link>
            </li>
            <li>
              <Link to="/grocery" className="hover:text-green-600 transition duration-200">Grocery</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-600 transition duration-200">About</Link>
            </li>

            <li>
              <Link
                to="/cart"
                className="flex items-center gap-2 bg-yellow-100 px-4 py-1.5 rounded-full hover:bg-yellow-200 transition"
              >
                🛒 <span>Cart</span>
                <span className="bg-white text-yellow-600 font-bold px-2 rounded-full shadow-sm">
                  {cartItems.length}
                </span>
              </Link>
            </li>

            <li>
              <button
                onClick={() =>
                  btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }
                className="bg-blue-500 text-white px-4 py-1.5 rounded-full hover:bg-blue-600 transition"
              >
                {btnName}
              </button>
            </li>

            <li className="relative group hidden sm:block">
              <div className="cursor-pointer text-sm text-gray-600 hover:text-gray-800 transition">
                👤 {loggedUser}
              </div>
              <div className="absolute right-0 mt-2 w-40 hidden group-hover:block bg-white rounded-lg shadow-lg text-left text-sm py-2 z-10">
                <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">Profile</div>
                <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">Settings</div>
                <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer">Logout</div>
              </div>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
