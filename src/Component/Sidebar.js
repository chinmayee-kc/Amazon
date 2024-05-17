import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { SideNavContent } from './SideNavContent';

export const Sidebar = (props) => {
  
  return (
    <div className='sidenav' style={props.state === "entering" ? {animation:"moveSideBar .3s forwards"} : props.state === "entered" ?
       {transform: "translateX(-0px)"} : {animation:"moveSideBar .3s reverse forward"}}>
        <div className='sidenavHeader'>   
        <a href='/login'>
          <FontAwesomeIcon  icon={faCircleUser} size='xl'  color='white'/><span className='sidenavuser '>Hello, sign in</span>
        </a>
        </div>
        <SideNavContent
            firstTitle="Digital Content & Devices"
            one="Amazon miniTV-Free entertainment"
            two="Kindle E-readers & eBooks"
            three="Amazon Prime Video"
            four="Amazon Prime Music"
            secondTitle="Shop by Category"
            five="Mobiles, Computers"
            six="Home & Kitchen"
            seven="Beauty,Health,Grocery"
            eight="Books"
            thirdTitle="programs & Features"
            nine="Amazon Pay"
            ten="Gift Cards & Mobile Recharges"
            eleven="Amazon Launchpad"
            twelve="International Brands"
            fourthTitle="Help & Settings"
            thirteen="Your Account"
            fourteen="Customer Service"
            fifteen="Contact us"
            sixteen="Sign Out"
        /> 
    </div>
  )
}

export default Sidebar;


