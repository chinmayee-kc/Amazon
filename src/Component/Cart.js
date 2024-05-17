import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
  return (
    <>
           <div className='cart-icon border'>
             <FontAwesomeIcon  icon={faCartShopping} />
             <span className='nav-account-second'>Cart</span>
           </div>
    </>
  )
}

export default Cart
