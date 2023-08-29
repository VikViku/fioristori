import React from 'react';
import { Link } from 'react-router-dom';
import './footer.style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <footer className="footer">
        <Link to="/" className="footer__logo">
            <img alt="logo"></img>
        </Link>

        <div className="footer__social">
            <h3>Sekite</h3>
            <a href="https://www.facebook.com/FioriStori" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="2x" className="fa-icon" /></a>
            <a href="https://www.instagram.com/fioristori" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" className="fa-icon" /></a>
        </div>

        <div className="footer__links">
            <h3>Informacija</h3>
            <Link to="/">Pagrindinis</Link>
            <Link to="/apie-mane">Apie</Link>
            <Link to="/galerija">Galerija</Link>
            <Link to="/paslaugos">Paslaugos</Link>
            <Link to="/nuoma">Nuoma</Link>
            <Link to="/kontaktai">Kontaktai</Link>
            
        </div>

        <div className="footer__contacts">
            <div>
                <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:timinskiene.vida3@gmail.com">timinskiene.vida3@gmail.com</a>
            </div>
            <div>
                <FontAwesomeIcon icon={faPhone} /> <a href="tel:+37067543081"> +37067543081</a>
            </div>
            <span><FontAwesomeIcon icon={faHome} /> Vilnius, bet dekoruoju visoje Lietuvoje</span>
        </div>

    </footer>
)

export default Footer;