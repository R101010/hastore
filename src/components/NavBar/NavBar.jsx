import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
    <>
      <div>
        <NavLink exact to='/'>VIEW NOTES</NavLink>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;

        <NavLink exact to='/add'>ADD NOTE</NavLink>
      </div>
      &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <div>
        <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
      </div>
    </>
      :
      <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
      </div>;
  
    return (
      <div className='NavBar'>
        {nav}
      </div>
    );
  };

export default NavBar;