import React from 'react';

import './nav-menu.style.scss';

const NavMenu = () => (
    <nav>
        <input type="checkbox" id="nav-toggle"/>
        <label htmlFor="nav-toggle" className="burger-menu">
            <span className="burger-icon">&nbsp;</span>
        </label>
        <a href="/" className="logo">FIORI STORI</a> 
        <ul className='menu'>
            <li><a href="#paslaugos">Paslaugos</a></li>
            <li>Nuoma</li>
            <li>Atsiliepimai</li>
            <li>Apie mane</li>
            <li>Galerija</li>
            <li>Kontaktai</li>
        </ul>   
    </nav>

    );

export default NavMenu;