import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Banner } from './Banner';
function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
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
            <Banner />
            <div className='container'>
                <div className='products-container'>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <div className='product-card' key={index}>
                                <div className='product-info'>
                                    <img className='product-image' src={product.thumbnail} alt='Product Thumbnail' />
                                    <h2 className='product-title'>{product.title}</h2>
                                    <p>Id: {product.id}</p>
                                    <p>{product.description}</p>
                                    <p className='price-section'>M.R.P: {product.price}</p>
                                    <p>{product.discountPercentage}% offer</p>
                                    <p>Rating: {product.rating}</p>
                                    <p>Brand: {product.brand}</p>
                                    <p>Stock: {product.stock}</p>
                                    <p>Category: {product.category}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        products.map((product, index) => (
                            <div className='product-card' key={index}>
                                <div className='product-info'>
                                    <img className='product-image' src={product.thumbnail} alt='Product Thumbnail' />
                                    <h2 className='product-title'>{product.title}</h2>
                                    <p>Id: {product.id}</p>
                                    <p>{product.description}</p>
                                    <p className='price-section'>M.R.P: {product.price}</p>
                                    <p>{product.discountPercentage}% offer</p>
                                    <p>Rating: {product.rating}</p>
                                    <p>Brand: {product.brand}</p>
                                    <p>Stock: {product.stock}</p>
                                    <p>Category: {product.category}</p>
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










































