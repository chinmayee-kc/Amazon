
import React, { useState } from 'react';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from  "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const SideNavContent = ({ firstTitle, one, two, three, four,secondTitle,five,six,seven,eight,thirdTitle,nine,ten,eleven,twelve,fourthTitle,thirteen,fourteen,fifteen,sixteen}) => {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [isOpenFour, setIsOpenFour] = useState(false);
  const [isOpenFive, setIsOpenFive] = useState(false);
  const [isOpenSix, setIsOpenSix] = useState(false);
  const [isOpenSeven, setIsOpenSeven] = useState(false);
  const [isOpenEight, setIsOpenEight] = useState(false);
  const [isOpenNine, setIsOpenNine] = useState(false);

  const toggleSubmenuOne = () => {
    setIsOpenOne(!isOpenOne);
  };
  // const toggleSubmenuOne = () => {
  //   setIsOpenOne(prevState => !prevState);
  // };
  
  const toggleSubmenuTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const toggleSubmenuThree = () => {
    setIsOpenThree(!isOpenThree);
  };
  const toggleSubmenuFour = () => {
    setIsOpenFour(!isOpenFour);
  };
  const toggleSubmenuFive= () => {
    setIsOpenFive(!isOpenFive);
  };
  const toggleSubmenuSix = () => {
    setIsOpenSix(!isOpenSix);
  };
  const toggleSubmenuSeven = () => {
    setIsOpenSeven(!isOpenSeven);
  };
  const toggleSubmenuEight = () => {
    setIsOpenEight(!isOpenEight);
  };
 
  return (
    < >
        <h3 className='sidebar-main'>{firstTitle}</h3>
        <ul className='sidebar-ul'>
          <li className='sidebar-list'>{one}</li>
           <li className='sidebar-list'>{two}
            <div onClick={toggleSubmenuOne} className='sidebar-icon'>
              {isOpenOne ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            {isOpenOne && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuOne} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Kindle E-readers</h3>
                <li className='sidebar-list'>All-new Kindle</li>
                <li className='sidebar-list'>All-new Kindle Paperwhite</li>
                <li className='sidebar-list'>Kindle Paperwhite Starter Pack</li>
                <li className='sidebar-list'>All-new Kindle Oasis</li>
                <li className='sidebar-list'>Refurbished & Open Box</li>
                <li className='sidebar-list'>Kindle E-Reader Accessories</li>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Kindle eBooks</h3>
                <li className='sidebar-list'>All Kindle eBooks</li>
                <li className='sidebar-list'>Prime Reading</li>
                <li className='sidebar-list'>Kindle Unlimited</li>
                <li className='sidebar-list'>Deals on Kindle eBooks</li>
                <li className='sidebar-list'>Kindle Exam Central</li>
                <li className='sidebar-list'>Kindle eTextbooks</li>
                <li className='sidebar-list'>eBooks BestSellers</li>
              </ul>
            )}
          </li> 

          <li className='sidebar-list'>{three}
          <div onClick={toggleSubmenuTwo} className='sidebar-icon'>{isOpenTwo ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</div>
            {isOpenTwo && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuTwo} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Amazon Prime Video</h3>
                <li className='sidebar-list'>All Videos</li>
                <li className='sidebar-list'>Store</li>
                <li className='sidebar-list'>Categories</li>
                <li className='sidebar-list'>My Stuff</li>
              </ul>
            )}
          </li>
          
          <li className='sidebar-list'>{four}
            <div onClick={toggleSubmenuThree} className='sidebar-icon'>{isOpenThree ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</div>
            {isOpenThree && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuThree} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Amazon Prime Music</h3>
                <li className='sidebar-list'>Amazon Prime Music</li>
                <li className='sidebar-list'>Open web player</li>
                <li className='sidebar-list'>Voice controlled with Alexa</li>
                <li className='sidebar-list'>Amazon Prime Music Apps</li>
                <li className='sidebar-list'>CDs and Vinyls</li>
              </ul>
            )}
          </li>
          <li className='sidebar-border'></li>
          <h3 className='sidebar-main'>{secondTitle}</h3>
          <li className='sidebar-list'>{five}
            <div onClick={toggleSubmenuFour} className='sidebar-icon'>
              {isOpenFour ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
            </div>
            {isOpenFour && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuFour} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Mobiles,Tablets & More</h3>
                <li className='sidebar-list'>All Mobile Phones</li>
                <li className='sidebar-list'>All Mobile Accessories</li>
                <li className='sidebar-list'>Cases & Covers</li>
                <li className='sidebar-list'>Screen Protectors</li>
                <li className='sidebar-list'>Power Banks</li>
                <li className='sidebar-list'>Tablets</li>
                <li className='sidebar-list'>Wearable Devices</li>
                <li className='sidebar-list'>Smart Home</li>
                <li className='sidebar-list'>Software</li>
                <li className='sidebar-list'>Office Supplies & Stationery</li>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Computers & Accessories</h3>
                <li className='sidebar-list'>All Computers & Accessories</li>
                <li className='sidebar-list'>Laptops</li>
                <li className='sidebar-list'>Drives & Storage</li>
                <li className='sidebar-list'>Printers & Ink</li>
                <li className='sidebar-list'>Networking Devices</li>
                <li className='sidebar-list'>Computer Accessories</li>
                <li className='sidebar-list'>Monitors</li>
                <li className='sidebar-list'>Desktops</li>
                <li className='sidebar-list'>Components</li>
                <li className='sidebar-list'>All Electronics</li>
              </ul>
            )}
          </li> 
          <li className='sidebar-list'>{six}
          <div onClick={toggleSubmenuFive} className='sidebar-icon'>{isOpenFive ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</div>
            {isOpenFive && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuFive} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Home & Kitchen</h3>
                <li className='sidebar-list'>Explore Showroom</li>
                <li className='sidebar-list'>Kitchen & Dining</li>
                <li className='sidebar-list'>Kitchen Storage & Containers</li>
                <li className='sidebar-list'>Home Decor</li>
                <li className='sidebar-list'>Indoor Lighting</li>
                <li className='sidebar-list'>Fine Art</li>
                <li className='sidebar-list'>Home Furnishing</li>
                <li className='sidebar-list'>Bedroom Linen</li>
                <li className='sidebar-list'>Home Improvement</li>
              </ul>
            )}
          </li>
          <li className='sidebar-list'>{seven}
            <div onClick={toggleSubmenuSix} className='sidebar-icon'>{isOpenSix ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</div>
            {isOpenSix && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuSix} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Beauty & Health</h3>
                <li className='sidebar-list'>Beauty & Grooming</li>
                <li className='sidebar-list'>Luxury Beauty</li>
                <li className='sidebar-list'>Make-up</li>
                <li className='sidebar-list'>Health & Personal Care</li>
                <li className='sidebar-list'>Amazon Pharmacy</li>
                <li className='sidebar-list'>Household Supplies</li>
                <li className='sidebar-list'>Diet & Nutrition</li>
                <li className='sidebar-list'>Office Supplies & Stationery</li>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Grocery & Gourmet Food</h3>
                <li className='sidebar-list'>All Grocery & Gourmet Food </li>
                <li className='sidebar-list'>Coffee,Tea & Beverages</li>
                <li className='sidebar-list'>Snack Foods</li>
              </ul>
            )}
          </li>
          <li className='sidebar-list'>{eight}
            <div onClick={toggleSubmenuSeven} className='sidebar-icon'>{isOpenSeven ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</div>
            {isOpenSeven && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuSeven} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Books</h3>
                <li className='sidebar-list'>All Books</li>
                <li className='sidebar-list'>Fiction Books</li>
                <li className='sidebar-list'>Editor's Corner</li>
                <li className='sidebar-list'>School Textbooks</li>
                <li className='sidebar-list'>Children's Books</li>
                <li className='sidebar-list'>Exam Central</li>
                <li className='sidebar-list'>Textbooks</li>
                <li className='sidebar-list'>Indian Language Books</li>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Audible Audiobooks</h3>
                <li className='sidebar-list'>Audible Audiobooks & more</li>
                <li className='sidebar-list'>Audible Membership</li>
              </ul>
            )}
          </li>
          <li className='sidebar-border'></li>
          <h3 className='sidebar-main'>{thirdTitle}</h3>
          <li className='sidebar-list'>{nine}</li> 
          <li className='sidebar-list'>{ten}
            <div onClick={toggleSubmenuEight} className='sidebar-icon'>{isOpenEight ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}</div>
            {isOpenEight && (
              <ul className='submenu'>
                <div onClick={toggleSubmenuEight} className='sidebar-icon'> <KeyboardArrowLeftIcon /><span className='main-menu'>MAIN MENU</span></div>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Gift Cards</h3>
                <li className='sidebar-list'>All Gift Cards</li>
                <li className='sidebar-list'>Popular Gift Cards</li>
                <li className='sidebar-list'>Editor's Corner</li>
                <li className='sidebar-list'>Gift Boxes,Gift Tags,Greeting Cards</li>
                <li className='sidebar-list'>Popular Brand Gift Vouchers</li>
                <li className='sidebar-list'>Birthday Gift Cards</li>
                <li className='sidebar-list'>Wedding & Anniversary</li>
                <li className='sidebar-list'>Best Wishes & Thank You</li>
                <li className='sidebar-border'></li>
                <h3 className='submenu-title '>Recharges</h3>
                <li className='sidebar-list'>Mobile Recharges</li>
               
              </ul>
            )}
          </li>
          <li className='sidebar-list'>{eleven}</li> 
          <li className='sidebar-list'>{twelve}</li>  
          <li className='sidebar-border'></li>
          <h3 className='sidebar-main'>{fourthTitle}</h3>
          <li className='sidebar-list'>{thirteen}</li> 
          <li className='sidebar-list'>{fourteen}</li>
          <li className='sidebar-list'>{fifteen}</li>
          <a href='/login'>
            <li className='sidebar-list td-none'>{sixteen}</li>
          </a>
          
          


         
        </ul>
    </>

  );
};

export default SideNavContent;

