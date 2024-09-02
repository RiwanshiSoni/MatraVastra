import React from 'react';
import { Link } from 'react-router-dom';
import "./css/Header.css";
import Logo from './logo04.jpg'; // Correct file path
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header({cart, categoriesList}) {
  return (
    <>
    <div className="header">
      <div className="header_top">
      <Link to="/">
        <img src={Logo} alt="Logo" className='header__logo' />
      </Link>
      <div className='header__search'>
        <input type="search" name="search" id="searchBar" />
        <SearchIcon className='searchIcon' />
      </div>
      <div className='header__nav'>

        <div className='signup'>
          <Link to="/signup">
            <AccountCircleIcon style={{ fontSize: 28 }} className='signup' />
          </Link>
        </div>
        <div className='header__optionBasket'>
          <Link to="/cart">
            <ShoppingCartIcon style={{ fontSize: 25 }} className='cart' />
            <span>
            
             {cart.total_items}
             
            </span>
          </Link>
    
        </div>

      </div>
      </div>
      
      <div className='header__bottom'>
        <ul>

          {
categoriesList?.map(categories=>{
  return  <li>All</li>
})

          }
         
          {/* <li>Men T-Shirt</li> */}
          {/* <li>Women T-Shirt</li> */}
          {/* <li>Today's Deal</li> */}
          {/* <li>Men & Women T-Shirts</li>
          <li>Customer Service</li>
          <li>Best Sellers</li> */}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Header;





