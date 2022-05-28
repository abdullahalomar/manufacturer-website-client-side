import React, {useEffect, useState} from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts(6);

    return (
        <div className="grid lg:grid-cols-3 gap-5  px-12">


            {
                products.map(product => <Product
                    key={product._id}
                    product={product}
                
                ></Product>)
            }
        </div>
    );
};

export default Products;
