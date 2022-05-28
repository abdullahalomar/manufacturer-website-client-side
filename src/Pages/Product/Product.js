import React from 'react';

const Product = ({product}) => {
    const { name, picture, min_quantity, available_quantity, price, short_desc } = product;
    return (
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div class="card-body">
    <h2 class="card-title">{ name}</h2>
                <p>{ min_quantity}</p>
                <p>{ available_quantity}</p>
                <p>{ price}</p>
                <p>{ short_desc}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Product;