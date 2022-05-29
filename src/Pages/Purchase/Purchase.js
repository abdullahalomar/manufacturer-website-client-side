import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Purchase = ({product}) => {
    const { productId } = useParams();
    const [productItem, setProductItem] = useState({});
    const [user, loading] = useAuthState(auth);
    const [reload, setIsReload] = useState(true);
    const onSubmit = data => console.log(data);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/productItem/${productItem}`;
        
        fetch(url)
            .then(response => response.json())
        .then(json => setProductItem(json))
    },[reload])

    return ( 
        <div className='mt-5'>
            <h2 className='text-2xl text-center'>User Name: {user.displayName}</h2>
            
            <br />
            <h2 className='text-2xl text-center'>User Email: {user.email}</h2>
            <form className='d-flex flex-column text-center mt-8' onSubmit={handleSubmit(onSubmit)}>
                    
                    <input className='outline bg-gray-200 rounded px-5' placeholder='Add Quantity' type="number" {...register("quantity", { min: 1, max: 999 })} />
                    <input className='btn btn-primary' type="submit" value='Add Item Quantity'/>
                </form>
        </div>
    );
};

export default Purchase;