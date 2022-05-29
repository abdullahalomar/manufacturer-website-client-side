import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderRow = (props) => {
    const { order, cancelOrder } = props;
    const navigate = useNavigate();
    
    const pay = order => {
        navigate(`/pay/${order}`)
    }
   
  
    return (
        <tr>
        <td>
            {order.name}
        </td>
        <td>
            {order.email}
        </td>
        <td>
            {order.product}
        </td>
        <td>
            {order.quantity}
        </td>
        <td>
            {order.price}
        </td>
        <td>
            {order.status}
        </td>
        <td>
        <div class="btn-group">
            <button class="btn bg-red-500" onClick={()=>cancelOrder(order._id)}>Cancel</button>
            <button class="btn bg-green-500" onClick={()=>pay(order._id)}>Pay</button>
        </div>
        </td>
    </tr>
    );
};

export default OrderRow;