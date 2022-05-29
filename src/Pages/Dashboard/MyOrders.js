import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const MyOrders = () => {
    // const [orders, setOrdders] = useState();
    // const [user] = useAuthState(auth);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/order?name=${}`)
    //         .then(response => response.json())
    //     .then(json => setOrdders(json))
    // },[])
    return (
        <div>
            <h2>my orders page</h2>
        </div>
    );
};

export default MyOrders;