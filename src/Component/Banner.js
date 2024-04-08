import React,{useState} from 'react'

export const Banner = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className='menu-bar'>
    <div className='amazon-menu'>
            <div className='hamburger-btn'>
                <img className="btn" src='menu (1).png' alt='menu icon'/><span className='all'>All</span>
            </div>
            <ul className='banner-list'>
                <li><a href="#">Fresh</a></li>
                <li><a href="#">Mobiles</a></li>
                <li><a href="#">Beauty Products</a></li>
                <li><a href="#">Home & Kitchen</a></li>
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Prime</a></li>
                <li><a href="#">Today's Deals</a></li>
                <li><a href="#">New Releses</a></li>
                <li><a href="#">Amazon Pay</a></li>
                <li><a href="#">Gift Ideas</a></li>
            </ul>
        </div>
    </div>
    </>
  )
}
