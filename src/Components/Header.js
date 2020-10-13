import React from 'react';
import {NavLink} from 'react-router-dom';
import {ReactComponent as Logo} from './battery-charge.svg';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div classname='header-nav'>
                <div classname='div-svg'>
                    <Logo />
                </div>
                <div style={{display:'flex', flexDirection:'row', 'alignItems':'center'}}>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/map'>Map</NavLink>
                    <button classname='loggin-button'>Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;