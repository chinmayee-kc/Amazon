
import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Banner } from './Banner';
import Sidebar from './Sidebar';
import {Transition} from 'react-transition-group';
import { HamburgerButton } from './HamburgerButton';
import {  Sliders } from './Sliders';
function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [navOpen, setNavOpen] = useState(false);
    const openNav = () =>{
        setNavOpen(true);
    }
    const closeNav = () =>{
        setNavOpen(false);
    }
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <div className='outer-div'>
            <Navbar products={products} setFilteredProducts={setFilteredProducts} />
            <HamburgerButton click={openNav}/>
            <Transition 
            in={navOpen}
            timeout={300}
            mountOnEnter
            unmountOnExit>
            {state =>{
                return(
                    <>
                    <Sidebar state={state}/>
                    <div className='overlay'
                    style={state === "entering" ? {animation:"show .3s forwards"} : state === "entered" ?
                    {opacity: "1"} : {animation:"show .3s reverse forward"}}
                    onClick={closeNav}>
                    </div>
                    <div className='closeBtn'
                    style={state === "entering" ? {animation:"show .3s forwards"} : state === "entered" ?
                    {opacity: "1"} : {animation:"show .3s reverse forward"}}
                    onClick={closeNav}>&times;
                    </div>
                    </>
                )
            }}
            
            </Transition>
            
            <Banner />
            <Sliders/>
            <div className='container'>
                <div className='products-container'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div className='product-card' key={index}>
                                <div className='product-info'>
                                    <div className='product-img-container'>
                                    <img className='product-image' src={product.thumbnail} alt='Product Thumbnail' /></div>
                                    <h2 className='product-title'>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p className='price-section'>M.R.P: {product.price}</p>
                                    <p>{product.discountPercentage}% offer</p>
                                    <p>Rating: {product.rating}</p>
                                    <p>Brand: {product.brand}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        products.map((product, index) => (
                            <div className='product-card' key={index}>
                                <div className='product-info'>
                                <div className='product-img-container'>
                                    <img className='product-image' src={product.thumbnail} alt='Product Thumbnail' /></div>
                                    <h2 className='product-title'>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p className='price-section'>&#8377; {product.price}</p>
                                    <p>{product.discountPercentage}% offer</p>
                                     <p>rating: {product.rating}</p>
                                    <p>Brand: {product.brand}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
export default Products;
















































































