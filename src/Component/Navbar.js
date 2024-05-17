import React from 'react';
import Cart from './Cart';
import { Searchbar } from './Searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

export const Navbar = ({ products, setFilteredProducts }) => {
    
  
    const handleSearch = (query) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    return (
        <nav className='nav-container'>
            <div className='nav-logo border'>
                <img className='logo' src='Amazon-Logo-White-Transparent.png' alt='amazon-logo'/>
            </div>

            <div className='nav-address border'>
                <p className='addr-first'>Deliver to</p>
                <div className='addr-icon'>
                  <img className='addr-icon-img'   src='location.png' alt='location icon'/>
                <p className='addr-second'>India</p>
                </div>
            </div>
                <Searchbar onSearch={handleSearch} />

                <div className='nav-country border'>
                  <img className='india-img'   src='icons8-india-25.png' alt='indian flag'/>
                  <span className='nav-language'>EN</span>
                  <FontAwesomeIcon icon={faSortDown}  color='gray' />
                </div>
                
                  <div className='nav-signin border td-none'>
                  <a href='/login'>
                     <p><span className='nav-first'>Hello, sign in</span></p>       
                     <p className='nav-account-second'>Account & Lists</p>   
                  </a>
                  </div>
                  <div className='nav-return border'>
                     <p><span className='nav-first'>Returns</span></p>
                     <p className='nav-account-second'>& Orders</p>
                  </div>
                <Cart />  
            </nav>
        
    );
};