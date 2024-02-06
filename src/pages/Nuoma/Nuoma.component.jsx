import React from 'react';
import { Link } from "react-router-dom";

import './Nuoma.style.scss';

const Nuoma = () => (
    <div className="Nuoma">
    <button class="action-button" role="button">Nuomos sąlygos</button>

    <div className="renting">
            <div>
                <Link to="/Nuoma/arkos">
                    <img src="https://placehold.co/300x200"/>
                </Link>
                <p>Arkos / foto sienos</p>
            </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Saldaus stalo indai</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Vazos</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Žvakidės</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Stalo numeriukai</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Arkos / foto sienos</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Saldaus stalo indai</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Vazos</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Žvakidės</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200"/>
            <p>Stalo numeriukai</p>
        </div>    </div>


    </div>
);
export default Nuoma;
