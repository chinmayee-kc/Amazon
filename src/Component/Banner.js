import React from 'react';
import { HamburgerButton } from './HamburgerButton';
export const Banner = () => {
  return (
    <>
    <div className='menu-bar'>
    <div className='amazon-menu'>
            {/* <HamburgerButton/> */}
            <ul className='banner-list hide-for-mobile'>
                <li>Fresh</li>
                <li>Mobiles</li>
                <li>Beauty Products</li>
                <li>Home & Kitchen</li>
                <li>Electronics</li>
                <li>Prime</li>
                <li>Today's Deals</li>
                <li>New Releses</li>
                <li>Amazon Pay</li>
                <li>Gift Ideas</li>
            </ul>
            <div className='banner-mobile hide-for-laptop'>
              <div>Fresh</div>
              <div>Mobiles</div>
              <div>Beauty Products</div>
            </div>
        </div>
    </div>
    </>
  )
}
