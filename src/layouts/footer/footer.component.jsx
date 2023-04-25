import React from 'react';

import './footer.style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => (
    <footer className="footer">
        <a className="footer__logo">
            <img alt="logo"></img>
        </a>

        <div className="footer__social">
            <p>Sekite</p>
            <a href="https://www.facebook.com/FioriStori" target="_blank"><FontAwesomeIcon icon={faFacebook} size="2x" className="fa-icon" /></a>
            <a href="https://www.instagram.com/fioristori" target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" className="fa-icon" /></a>
        </div>

        <div className="footer__links">
            <a href="">Pagrindinis</a>
            <a href="">Apie</a>
            <a href="">Galerija</a>
            <a href="">Paslaugos</a>
            <a href="">Nuoma</a>
            <a href="">Kontaktai</a>
            
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