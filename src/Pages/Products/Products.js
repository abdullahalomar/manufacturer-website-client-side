import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(response => response.json())
        .then(json => setProduct(json))
    }, [])
    
    return (
        <div>
           
                <h2>Available Product: { Products.length}</h2>
                
            {/* {
                Products.map(product => <Product
                    key={product._id}
                    product={product}
                ></Product>)
            } */}
        </div>
    );
};

export default Products;