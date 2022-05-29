import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';


const MyReview = () => {
    const { register, handleSubmit } = useForm();

    const [user, loading] = useAuthState(auth);

    const [review, setReview] = useState({});

    const onSubmit = data => {
        delete data.submit;
        data.name = user.displayName;

    const url = `https://pure-spire-01471.herokuapp.com/add-review`;
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
            <h2 className='text-xl mb-4'>My review </h2>
            <form className="justify-center w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                          
                            <div className="space-x-0 lg:flex lg:space-x-4">
                                <div className="w-full ">
                                    <label for="review" className="block mb-3 text-sm font-semibold text-gray-500">
                                      Review</label>
                                    <input  type="number"
                                            className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600" min={0} max={5} {...register("review")} />
                                        </div>
                               
                            </div>
                            <div className="mt-4">
                                <div className="w-full">
                                    <label for="Comment"
                                        className="block mb-3 text-sm font-semibold text-gray-500">Comment</label>
                                    <textarea
                                        className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        cols="20" rows="4" placeholder="Comment" {...register("comment")}></textarea>
                                </div>
                            </div>
                           
                                <div className="mt-4">
                                <input  type="submit"
                                           className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900" value="submit"  {...register("submit")} />
                       
                            </div>
                        </div>
                    </form>
        </div>
    );
};

export default MyReview;