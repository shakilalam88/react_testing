import React from 'react'
import './MenusBar.css';
import {Outlet, Link} from 'react-router-dom';

const MenusBar = () => {
  return (
    <>
    <div className="menusbar">
        <div className="logo">Logo</div>
        <div className="menuItems">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/service'>Service</Link></li>
            </ul>
        </div>
    </div>
    <Outlet/>
    </>
  )
}

export default MenusBar