import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from './battery-charge.svg';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div classname='header-nav'>
                <Logo />
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/VisitorView'>Map</NavLink>
                <button classname='loggin-button'>Login</button>
            </div>
        </nav>
    )
}

export default Header;