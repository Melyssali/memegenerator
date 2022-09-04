import React from 'react';
import './navbar.scss';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <img className='navbar--logo' alt="trollface" src="images/troll-face.png" />
            <span className='navbar--text'>Meme Generator</span>
        </nav>
    )
}

export default NavBar;