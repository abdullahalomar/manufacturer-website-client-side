import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Purchase = () => {
    // const { min_quantity, available_quantity } = product;
    const { productId } = useParams();
    const [productItem, setProductItem] = useState({});
    const [user, loading] = useAuthState(auth);
    // const [reload, setIsReload] = useState(true);
   
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/product/${productId}`;
        
        fetch(url)
            .then(response => response.json())
        .then(json => setProductItem(json))
    },[])
 

    const onSubmit = data => {
        data.user_id = user.uid;
        data.product = productItem.name;
        data.price = data.quantity * productItem.price;
        data.status = 'unpaid';

        const url = `http://localhost:5000/create-order`;
    fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => console.log(result));
    }
    
    return ( 
        <div>
          
        <div className="container p-12 mx-auto">
            <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
                <div className="flex flex-col md:w-full">
                    <h2 className="mb-4 font-bold md:text-xl text-heading ">Shipping Address
                    </h2>
                    <form className="justify-center w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full ">
                                    <label for="Name" className="block mb-3 text-sm font-semibold text-gray-500">
                                        Name</label>
                                    <input name="firstName" type="text" placeholder="First Name"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("name")} />
                                </div>
                               
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Email"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Email</label>
                                    <input  type="text" placeholder="Email"
                                        className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" {...register("email")} />
                                </div>
                                </div>
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full ">
                                    <label for="quantity" className="block mb-3 text-sm font-semibold text-gray-500">
                                       Quantity</label>
                                    <input  type="number"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" min={productItem.min_quantity} max={productItem.available_quantity} {...register("quantity")} />
                                </div>
                               
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Address"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Address</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        cols="20" rows="4" placeholder="Address" {...register("address")}></textarea>
                                </div>
                            </div>
                           
                           
                        
                                <div className="mt-4">
                                <input  type="submit"
                                           className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" value="submit"  {...register("submit")} />
                       
                            </div>
                        </div>
                    </form>
                </div>
               
            </div>
        </div>
       </div>
    );
};

export default Purchase;