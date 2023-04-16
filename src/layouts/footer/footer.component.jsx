import React from 'react';

import './footer.style.scss';

const Footer = () => (
    <footer>
        <div className="footer-widget">
            <h3>Kontaktinė informacija</h3>
            <div className="contact-block">
                <ul>
                    <li>
                        {/* <FontAwesomeIcon icon="phone" /> */}
                        <span className="text"> Telefonas</span>
                    </li>
                    <li>
                        {/* <FontAwesomeIcon icon="paper-plane" /> */}
                        <span className="text"> E-mail</span>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
)

export default Footer;