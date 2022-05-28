import React, {useEffect, useState} from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useProducts(6);

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 px-12">


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
