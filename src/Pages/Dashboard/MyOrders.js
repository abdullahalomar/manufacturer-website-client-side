import { reload } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [reload, setReload] = useState(false);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://pure-spire-01471.herokuapp.com/order?user=${user.uid}`)
            .then(response => response.json())
            .then(json => setOrders(json))
    }, [reload])

    
    const cancelOrder = (id) => {
        fetch(`https://pure-spire-01471.herokuapp.com/delete-order/${id}`)
            .then(response => response.json())
            .then(json => setReload(!reload));
    }

    return (
        <div>
            <h2>Total Orders : {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow order={order} cancelOrder={cancelOrder} key={order._id} ></OrderRow>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;