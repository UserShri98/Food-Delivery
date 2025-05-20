import cuisineIcon from '../assets/cuisine-icon-3.jpg';

  const Header = () => {
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
          </ul>
        </div>
      </div>
    )
  }

  export default Header;