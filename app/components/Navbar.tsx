import React from 'react'
import Image from 'next/image';

const NavBar  = () => {
  return (
    <main>
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Events</a></li>
        <li>
          <a>Surbubs</a>
          <ul className="p-2">
            <li><a>Townsquare</a></li>
            <li><a>Jumeira</a></li>
          </ul>
        </li>
        <li><a>Alqoudra</a></li>
      </ul>
    </div>
    <Image src="/tom x & co-PhotoRoom.png-PhotoRoom.png" height ={100} width={100} alt='logo' />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Contact Us</a></li>
      <li><a>About Us</a></li>
      <li><a>Careers</a></li>
     
      <li><a>Partnership</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn btn-outline">Sign In</a>
  </div>
</div>
    </main>
  )
}

export default  NavBar;