import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
  <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
     <h2 className='text-3xl font-bold text-green-500'>Dashboard</h2>
    <Outlet></Outlet>
    
  
  </div> 
  <div class="drawer-side">
    <label for="dashboard-sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
              
            <li><Link to='/dashboard/orders'>My Orders</Link></li>
            <li><Link to='/dashboard/review'>Add Review</Link></li>
            <li><Link to='/dashboard/profile'>My Profile</Link></li>
              
              {/* <li><link to='/dashboard/manage'>Manage Orders</link></li> */}
              {/* <li><link to='/dashboard'>Add Product</link></li> */}

    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;