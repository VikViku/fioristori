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
            <li><a href="#nuoma">Nuoma</a></li>
            <li><a href="#atsiliepimai">Atsiliepimai</a></li>
            <li><a href="#apie-mane">Apie mane</a></li>
            <li><a href="#galerija">Galerija</a></li>
            <li><a href="#kontaktai">Kontaktai</a></li>
        </ul>   
    </nav>

    );

export default NavMenu;