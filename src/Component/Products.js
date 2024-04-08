// import React, { useState, useEffect } from 'react';
// import { Navbar } from './Navbar';
// import { Banner } from './Banner';
// function Products() {
//     const [results,setResults] = useState([])
    
//     const [products, setProducts] = useState([]);
    
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const handleSelectProduct = (product) => {
//         setSelectedProduct(product); 
//     };
//     const fetchProducts = async () => {
//         try {
//             const response = await fetch('https://dummyjson.com/products');
//             const data = await response.json();
//             setProducts(data.products);
//             // console.log('dataaa', data);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };
   
//     useEffect(() => {
//         fetchProducts();
//     }, []);
    
//     return (
//         <div className='outer-div'>
//             <Navbar/>  {/*NAVBAR COMPONENT*/}
//             <Banner/>
//             <div className="container">
//                 <div className="products-containerr">
//                 {selectedProduct && (
//                         <div className="product-card">
//                             <div className="product-info">
                               
//                                 <h2 className="product-title">{selectedProduct.title}</h2>
//                                 <p>Id: {selectedProduct.id}</p>
                                
//                             </div>
//                         </div>
//                     )}
//                     {products.map((product, index) => (
//                         <div className="product-card" key={index}>
//                             <div className="product-info">
//                                 <img className="product-image" src={product.thumbnail} alt="Product Thumbnail" />
//                                 <h2 className="product-title">{product.title}</h2>
//                                 <p>Id: {product.id}</p>
//                                 <p>{product.description}</p>
//                                 <p className='price-section'>M.R.P: {product.price}</p>
//                                 <p>{product.discountPercentage}% offer</p>
//                                 <p>Rating: {product.rating}</p>
//                                 <p>Brand: {product.brand}</p>
//                                 <p>Stock: {product.stock}</p>
//                                 <p>Category: {product.category}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Products;




import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { Banner } from './Banner';
import { Searchbar } from './Searchbar'; // Import the Searchbar component

function Products() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            setFilteredProducts(data.products); // Initialize filtered products with all products
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    // Function to handle product selection
    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
    };

    // Function to handle search input change
    const handleSearchInputChange = (query) => {
        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filtered);
    };
    
    

    return (
        <div className='outer-div'>
            {/* <Navbar products={products}/> */}
            <Navbar onSearch={handleSearchInputChange} />

            <Banner/>
            {/* <Searchbar onSearch={handleSearchInputChange} /> Pass the handleSearchInputChange function as a prop */}
            <div className="container">
                <div className="products-container">
                    {selectedProduct && (
                        <div className="product-card">
                            <div className="product-info">
                                <h2 className="product-title">{selectedProduct.title}</h2>
                                <p>Id: {selectedProduct.id}</p>
                            </div>
                        </div>
                    )}
                    {filteredProducts.map((product, index) => (
                        <div className="product-card" key={index} onClick={() => handleSelectProduct(product)}>
                            <div className="product-info">
                                <img className="product-image" src={product.thumbnail} alt="Product Thumbnail" />
                                <h2 className="product-title">{product.title}</h2>
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
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;




































// import React, { useState, useEffect } from 'react';
// import { Navbar } from './Navbar';
// import { Banner } from './Banner';
// import { Searchbar } from './Searchbar'; // Import the Searchbar component

// function Products() {
//     const [products, setProducts] = useState([]);
//     // const [filteredProducts, setFilteredProducts] = useState([]); // State to hold filtered products

//     const fetchProducts = async () => {
//         try {
//             const response = await fetch('https://dummyjson.com/products');
//             const data = await response.json();
//             setProducts(data.products);
//             setFilteredProducts(data.products); // Initialize filtered products with all products
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };
   
//     useEffect(() => {
//         fetchProducts();
//     }, []);
    
//     // Function to handle search query change
//     // const handleSearch = (query) => {
//     //     const filtered = products.filter(product => 
//     //         product.title.toLowerCase().includes(query.toLowerCase())
//     //     );
//     //     setFilteredProducts(filtered);
//     // };
    
//     return (
//         <div className='outer-div'>
//             <Navbar/>  {/*NAVBAR COMPONENT*/}
//             <Banner/>
//             <Searchbar  /> {/* Pass the handleSearch function as prop */}
//             <div className="container">
//                 <div className="products-containerr">
//                     {filteredProducts.map((product, index) => (
//                         <div className="product-card" key={index}>
//                             <div className="product-info">
//                                 <img className="product-image" src={product.thumbnail} alt="Product Thumbnail" />
//                                 <h2 className="product-title">{product.title}</h2>
//                                 <p>Id: {product.id}</p>
//                                 <p>{product.description}</p>
//                                 <p className='price-section'>M.R.P: {product.price}</p>
//                                 <p>{product.discountPercentage}% offer</p>
//                                 <p>Rating: {product.rating}</p>
//                                 <p>Brand: {product.brand}</p>
//                                 <p>Stock: {product.stock}</p>
//                                 <p>Category: {product.category}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Products;



// import React, { useState, useEffect } from 'react';
// import { Navbar } from './Navbar';
// import { Banner } from './Banner';
// import { Searchbar } from './Searchbar';

// function Products() {
//     const [products, setProducts] = useState([]);


//     const fetchProducts = async () => {
//         try {
//             const response = await fetch('https://dummyjson.com/products');
//             const data = await response.json();
//             setProducts(data.products);
//             setFilteredProducts(data.products);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };
   
//     useEffect(() => {
//         fetchProducts();
//     }, []);
    

    
//     return (
//         <div className='outer-div'>
//             <Navbar/>
//             <Banner/>
//              {/* Pass the handleSearch function as a prop */}
//             <div className="container">
//                 <div className="products-containerr">
//                     {filteredProducts.map((product, index) => (
//                         <div className="product-card" key={index}>
//                             <div className="product-info">
//                                 <img className="product-image" src={product.thumbnail} alt="Product Thumbnail" />
//                                 <h2 className="product-title">{product.title}</h2>
//                                 <p>Id: {product.id}</p>
//                                 <p>{product.description}</p>
//                                 <p className='price-section'>M.R.P: {product.price}</p>
//                                 <p>{product.discountPercentage}% offer</p>
//                                 <p>Rating: {product.rating}</p>
//                                 <p>Brand: {product.brand}</p>
//                                 <p>Stock: {product.stock}</p>
//                                 <p>Category: {product.category}</p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Products;

























