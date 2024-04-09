import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { Searchbar } from './Searchbar';

export const Navbar = ({ products, setFilteredProducts }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('loggedin');
        navigate('/login');
    };
    const handleSearch = (query) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    return (
        <div className='nav-container'>
            <nav className='menu'>
                <ul>
                    <li><div>Departments</div></li>
                    <li><div>Best Sellers</div></li>
                    <li><div>Customer Services</div></li>
                </ul>
                <Searchbar onSearch={handleSearch} />
                <div className='account'>
                    <div>Your Account</div>
                    <div>Orders</div>
                </div>
                <Cart /> 
                <button className='logout' onClick={handleLogout} type='button'>
                    Logout
                </button>
            </nav>
        </div>
    );
};