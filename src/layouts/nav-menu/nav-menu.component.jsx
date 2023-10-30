import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';


import './nav-menu.style.scss';

const NavMenu = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
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
                <li onMouseEnter={() => setIsHovered(!isHovered)} 
                    onMouseLeave={() => setIsHovered(!isHovered)} >
                <Link>Galerija &nbsp; 
                {isHovered ? (<FontAwesomeIcon icon={faCaretUp}/>) :
                (<FontAwesomeIcon icon={faCaretDown}/>)}</Link>
                    <div className="dropdown">
                        <ul>
                            <li><Link to="/Galerija">Vestuvės</Link></li>
                            <li><Link to="/Galerija">Krikštynos ir gimtadieniai</Link></li>
                            <li><Link to="/Galerija">Kitos šventės</Link></li>
                        </ul>
                    </div>
                </li>
                <li><Link to="/kontaktai">Kontaktai</Link></li>
            </ul>   
        </nav>
    )

};

export default NavMenu;