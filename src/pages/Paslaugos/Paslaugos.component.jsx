import React from 'react';
import { Link } from "react-router-dom";

import './Paslaugos.style.scss';
import Heading from '../../components/heading/heading.component';

const Paslaugos = () => (
    <div className="Paslaugos">

    <Heading title="Paslaugos"/>

    <div className="services">
            <div>
                <Link to="/Paslaugos/vestuviu-dekoras">
                    <div className="bg-image one"></div>
                </Link>
                <p>Vestuvių dekoras ir floristika</p>
            </div>
        <div>
                <Link to="/Paslaugos/svenciu-dekoras">
                    <div className="bg-image two"></div>
                </Link>
            <p>Asmeninių švenčių dekoras ir floristika</p>
        </div>
        <div>
                <Link to="/Paslaugos/imoniu-dekoras">
                    <div className="bg-image three"></div>
                </Link>
            <p>Įmonių, renginių, biurų, vitrinų dekoras</p>
        </div>
        <div>
                <Link to="/Paslaugos/dekoraciju-nuoma">
                    <div className="bg-image four"></div>
                </Link>
            <p>Dekoracijų nuoma</p>
        </div>
        <div>
                <Link to="/Paslaugos/jaunosios-puokstes">
                    <div className="bg-image five"></div>
                </Link>
            <p>Jaunosios puokštės</p>
        </div>
        <div>
                <Link to="/Paslaugos/sveikinimu-puokstes">
                    <div className="bg-image six"></div>
                </Link>
            <p>Sveikinimo puokštės</p>
        </div>    </div>


    </div>
);
export default Paslaugos;
