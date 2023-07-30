import React from 'react';
import './Header.css';
import logo from '../assets/images/home/innoqon.png';
import { Link } from 'react-router-dom';

function Header() {

  // const handlelogin = () => {
    
  // }

  return (
    <div>
      <div className="head"></div>
        {/* nav section  start*/}
        <nav>
          <Link to='/' className="logo">
            <img src={logo} alt="" />
          </Link>
          <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/demo">Demo</Link>
            <Link to="/about-us">Company</Link>
            <Link to="/stories">Stories</Link>
          </div>
          <Link className='log_in' to="/dashboard">Login</Link>
        </nav>
    </div>
  )
}

export default Header
