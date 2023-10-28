import React from 'react';
import { Link } from "react-router-dom";

import './nav-menu.style.scss';

const NavMenu = () => (
    <nav>
        <input type="checkbox" id="nav-toggle"/>
        <label htmlFor="nav-toggle" className="burger-menu">
            <span className="burger-icon">&nbsp;</span>
        </label>
        <Link to="/" className="logo">FIORI STORI</Link>
        <ul className="menu">
            <li><Link to="/paslaugos">Paslaugos</Link></li>
            <li><Link to="/nuoma">Nuoma</Link></li>
            <li><Link to="/atsiliepimai">Atsiliepimai</Link></li>
            <li><Link to="/apie-mane">Apie mane</Link></li>
            <li><Link to="/galerija">Galerija</Link>
                <div class="dropdown">
                    <ul>
                        <li><Link to="/">Vestuvės</Link></li>
                        <li><Link to="/">Krikštynos ir gimtadieniai</Link></li>
                        <li><Link to="/">Kitos šventės</Link></li>
                    </ul>
                </div>
            </li>
            <li><Link to="/kontaktai">Kontaktai</Link></li>
        </ul>   
    </nav>

    );

export default NavMenu;