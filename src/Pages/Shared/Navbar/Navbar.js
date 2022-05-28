import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    }
    const navMenu = <>
        <li><Link to='/'> Home</Link></li>
        <li><Link to='/purchase'>Purchase</Link></li>
        <li><Link to='portfolio'>Portfolio</Link></li>
        {/* <li><Link to='portfolio'>Product</Link></li> */}
        <li><Link to='Blog'>Blog</Link></li>
        {
            user && <li><Link to='/dashboard'>Dashboard</Link></li>
        }
        <li>{ user ? <button class="btn btn-accent" onClick={logout}>Log Out</button> : <Link to='login'>Login</Link>}</li>
    </>

    return (
        <div class="navbar bg-primary">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu} </ul>
                </div>
                <p class="btn btn-ghost normal-case text-xl">Ram Manufacturer</p>
            </div>
            <div class="navbar-end hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {navMenu} </ul>
            </div>
            <div className='navbar-end'>
                <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"/></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;
