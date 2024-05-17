import React from 'react';
export const Banner = () => {
  return (
    <>
      <div className='amazon-menu'>
            <div className='banner-list  hide-for-mobile '>
                <p>Fresh</p>
                <p>Mobiles</p>
                <p>Beauty Products</p>
                <p>Home & Kitchen</p>
                <p>Electronics</p>
                <p>Prime</p>
                <p>Today's Deals</p>
                <p>New Releses</p>
                <p>Amazon Pay</p>
                <p>Gift Ideas</p>
            </div>
            <div className='banner-mobile hide-for-laptop'>
              <p>Fresh</p>
              <p>Mobiles</p>
              <p>Beauty Products</p>
            </div>
        </div>
    </>
  )
}
