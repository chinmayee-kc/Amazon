
// ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setProduct(data); 
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct(); 
  }, [id]); 
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
              <div className="product-card" >
                            <div className="product-info">
                                <img className="product-image" src={product.thumbnail} alt="Product Thumbnail" />
                                {/* <Link to={`/product/${product.id}`}>{product.title}</Link> */}
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
    </div>
  );
}

export default ProductDetail;
