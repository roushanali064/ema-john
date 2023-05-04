import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { userContext } from '../Providers/AuthProviders';

const Header = () => {
    const { logOut, user } = useContext(userContext);
    const handleSignOut = () => {
        logOut()
            .then(res => { })
            .catch(error => console.error(error))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span className='header-user'>welcome   {user.displayName ? user.displayName : user.email} <button onClick={handleSignOut}>Sign Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;