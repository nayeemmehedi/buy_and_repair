import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <div style={{backgroundColor:"#38423b",height:"100px"}} >

            <ul  class="nav justify-content-center">
            <li class="nav-item  m-3">
                <a style={{color:'white'}} class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item  m-3">
                <Link style={{color:'white'}} class="nav-link" to="/event">Buy Mobile</Link>
            </li>
            <li class="nav-item  m-3">
                <Link style={{color:'white'}} class="nav-link" to="/myevent">Cart</Link>
            </li>
            
           
            <li class="nav-item  m-3">
                <a style={{color:'white'}} class="nav-link" href="/review">Review</a>
            </li>

            <li class="nav-item  m-3">
                <Link style={{color:'white'}} class="nav-link" to="/repairlocation">Contact us</Link>
            </li>
            <li class="nav-item  m-3">
            <Link style={{color:'white'}} class="nav-link" to="/allregistration">Admin</Link>
            </li>

            </ul>
            
        </div>
    );
};

export default Navbar;