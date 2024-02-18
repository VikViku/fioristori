import React from 'react';
import { Link } from "react-router-dom";

import './Nuoma.style.scss';
import Heading from '../../components/heading/heading.component';

const Nuoma = () => (
    <div className="Nuoma">
    <Heading title="Nuoma"/>
    <button class="action-button">Nuomos sąlygos</button>

    <div className="renting">
            <div>
                <Link to="/Nuoma/arkos">
                    <img src="https://placehold.co/300x200" alt=''/>
                </Link>
                <p>Arkos / foto sienos</p>
            </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Saldaus stalo indai</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Vazos</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Žvakidės</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Stalo numeriukai</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Arkos / foto sienos</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Saldaus stalo indai</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Vazos</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Žvakidės</p>
        </div>
        <div>
            <img src="https://placehold.co/300x200" alt=''/>
            <p>Stalo numeriukai</p>
        </div>    </div>


    </div>
);
export default Nuoma;
