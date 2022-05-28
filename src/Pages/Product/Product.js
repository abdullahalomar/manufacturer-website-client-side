import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const { _id, name, picture, min_quantity, available_quantity, price, short_desc } = product;
    const navigate = useNavigate();
    const NavigateToPurchase = id => {
        navigate(`/purchase/${id}`);
    }
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl ">
            <figure><img src={picture}
                    alt=""/></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}</h2>
                <p>Quantity: {available_quantity}</p>
                <p>Min-Quantity {min_quantity}</p>
                <p>Price: ${price}</p>
                <p> {short_desc}</p>
                <div class="card-actions justify-end">
                    <button onClick={()=> NavigateToPurchase(_id)} class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
