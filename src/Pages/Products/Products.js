import React, {useEffect, useState} from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('products.json').then(response => response.json()).then(json => setProduct(json))
    }, [])

    return (
        <div className="grid lg:grid-cols-3 gap-5  px-10">


            {
            products.map(product => <Product key={
                    product._id
                }
                product={product}></Product>)
        } </div>
    );
};

export default Products;
