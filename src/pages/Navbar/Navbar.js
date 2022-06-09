import React from 'react';
import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const NavItems = <>
  <li><Link className='rounded-md'  to='/'>Home</Link></li>
  <li><Link className='rounded-md'  to='/Contact Us'>Contact Me</Link></li>
  <li><Link className='rounded-md'  to='/About'>About</Link></li>

  

  </>
  return (
    <div class="navbar navbar-bg bg-base-100 text-white">
  
  
    <div class="dropdown">
       
      <label tabindex="0" class="btn  btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100   text-black rounded-box w-52">
        {NavItems}
      </ul>
    </div>
    <a class="btn btn-ghost normal-case mr-auto text-xl">Alamgir Hossain</a>
  <div class=" navbar-end hidden lg:flex">
    <ul class="menu  menu-horizontal p-0">
    {NavItems}
    </ul>
  </div>
 
</div>
  );
};

export default Navbar;