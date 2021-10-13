import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';
import useAuth from '../../hooks/useAuth'
const Header = () => {
    const { user, LogOut } = useAuth();
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/review">Order Review</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                <span style={{ color: 'white' }}>{user.displayName}</span>
                {
                    user.email ?
                        <button onClick={LogOut}>Log Out</button>
                        :
                        <NavLink to="/login">Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;