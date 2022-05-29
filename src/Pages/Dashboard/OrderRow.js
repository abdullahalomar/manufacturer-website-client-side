import React, { useState } from 'react';

const OrderRow = (props) => {
   const { order, cancelOrder } = props;
   
  
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
            <button class="btn bg-green-500">Pay</button>
        </div>
        </td>
    </tr>
    );
};

export default OrderRow;