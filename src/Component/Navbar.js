// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
// import Cart from './Cart';
// import { Searchbar } from './Searchbar';
// export const Navbar = ({products}) => {
  
//     const navigate = useNavigate();
//     const [filteredProducts, setFilteredProducts] = useState("");
//     // Logout function
//     const handleLogout = () => {
//         localStorage.removeItem("loggedin");
//         navigate("/login");
//     };
//     const handleSearch = (query) => {
//       const filtered = products.filter(product => 
//           product.title.toLowerCase().includes(query.toLowerCase())
//       );
//       console.log("query:",filtered);
//       setFilteredProducts(filtered);
//   };
//   return (
//     <div className='nav-container'>
//         <nav className="menu">
//           {/* <div className='amazon-icon'>
//             <img className="amazon"    src='Amazon-Logo-White-Transparent.png' alt='amazon icon'/>
//           </div> */}
//           <ul>
//             <li><div>Departments</div></li>
//             <li><div>Best Sellers</div></li>
//             <li><div>Customer Services</div></li>
//           </ul>
//           <Searchbar onSearch={handleSearch} />
          
//           {/* <Searchbar/> */}
//           <div className="account">
//             <div>Your Account</div>
//             <div>Orders</div>
//           </div>    
//           <Cart/>    {/* CART COMPONENT */}
//           <button className='logout'
//             onClick={handleLogout}
//             type="button">Logout
//           </button>
//         </nav>
//     </div>
//   )
// }
// {/*https://amazon-fullstack-2-0.vercel.app/_next/image?url=https%3A%2F%2Flinks.papareact.com%2Ff90&w=384&q=75*/}












// Navbar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { Searchbar } from './Searchbar';
import Products from './Products';

export const Navbar = ({onSearch,  handleLogout }) => {
    const navigate = useNavigate();
console.log("pro",Products);
    return (
        <div className='nav-container'>
            <nav className="menu">
                <ul>
                    <li><div>Departments</div></li>
                    <li><div>Best Sellers</div></li>
                    <li><div>Customer Services</div></li>
                </ul>
                <Searchbar onSearch={onSearch} />
                {/* <Searchbar onSearch={handleSearchInputChange} /> */}

                <div className="account">
                    <div>Your Account</div>
                    <div>Orders</div>
                </div>    
                <Cart/>    {/* CART COMPONENT */}
                <button className='logout'
                    onClick={handleLogout}
                    type="button">Logout
                </button>
            </nav>
        </div>
    );
};
