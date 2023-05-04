import React from 'react';

import Intro from '../../components/intro/intro.component';
import Heading from '../../components/heading/heading.component';

import paslaugos1 from '../../assets/images/paslaugos_1.jpeg';

import './Homepage.style.scss';

const HomePage = () => (
    <main>
        <Intro /> 
        <Heading title="Paslaugos"/>
        <section className="paslaugos">
            <div>
                <div className="bg-image one"></div>
                <div className="overlay">
                    <p>Vestuvių dekoravimas ir floristika</p>
                    <button>Daugiau</button>
                </div>
            </div>
            <div>
            <div className="bg-image two"></div>
                <div className="overlay">
                    <p>Asmeninių švenčių dekoravimas ir floristika</p>
                    <button>Daugiau</button>
                </div>
            </div>
            <div>
            <div className="bg-image three"></div>
                <div className="overlay">
                    <p>Bažnyčios, ceremonijos vietos dekoravimas ir floristika</p>
                    <button>Daugiau</button>
                </div>
            </div>
            <div>
            <div className="bg-image four"></div>
                <div className="overlay">
                    <p>Dekoracijų nuoma</p>
                    <button>Daugiau</button>
                </div>
            </div>
            <div>
            <div className="bg-image five"></div>
                <div className="overlay">
                    <p>Jaunosios puokštės</p>
                    <button>Daugiau</button>
                </div>
            </div>
            <div>
            <div className="bg-image six"></div>
                <div className="overlay">
                    <p>Sveikinimų puokštės</p>
                    <button>Daugiau</button>
                </div>
            </div>
        
        </section>
        <Heading title="Dekoracijų nuoma"/>
        <section>3</section>
        <Heading title="Kainoraštis"/>
        <section className="kainos">
            <div>
                <p>1</p>
            </div>
            <div>
                <p>2</p>
            </div>
            <div>
                <p>3</p>
            </div>
        </section>
        <Heading title="Galerija"/>
        <section className="galerija">
            <div className="galerija__item galerija__item--1">
                <img src={paslaugos1} alt="1"/>
            </div>
            <div className="galerija__item galerija__item--2">
                <img src={paslaugos1} alt="2"/>
            </div>
            <div className="galerija__item galerija__item--3">
                <img src={paslaugos1} alt="3"/>
            </div>
            <div className="galerija__item galerija__item--4">
                <img src={paslaugos1} alt="4"/>
            </div>
            <div className="galerija__item galerija__item--5">
                <img src={paslaugos1} alt="5"/>
            </div>
            <div className="galerija__item galerija__item--6">
                <img src={paslaugos1} alt="6"/>
            </div>
            <div className="galerija__item galerija__item--7">
                <img src={paslaugos1} alt="7"/>
            </div>
            <div className="galerija__item galerija__item--8">
                <img src={paslaugos1} alt="8"/>
            </div>     
            <div className="galerija__item galerija__item--9">
                <img src={paslaugos1} alt="9"/>
            </div>            
            <div className="galerija__item galerija__item--10">
                <img src={paslaugos1} alt="10"/>
            </div>            
            <div className="galerija__item galerija__item--11">
                <img src={paslaugos1} alt="11"/>
            </div>            
            <div className="galerija__item galerija__item--12">
                <img src={paslaugos1} alt="12"/>
            </div>            
            <div className="galerija__item galerija__item--13">
                <img src={paslaugos1} alt="13"/>
            </div>            
            <div className="galerija__item galerija__item--14">
                <img src={paslaugos1} alt="14"/>
            </div>
            
            
        </section>
        <Heading title="Apie mane" sub="įkūrėjos žodis"/>
        <section className="item-holder">
            <div>
            <p>Esu Vida, <i>FioriStori</i> įkūrėja, dekoratorė, floristė. Esu didelė gėlių mylėtoja ir tikiu jų galia, todėl kuriant šventės dekorą didelį dėmesį skiriu gėlių kompozicijoms, rūšims, spalvų derinimui.</p>
            <p>Gėlės man yra gražiausia puošmena šventėje, o jei jas papildo spalviškai suderinta tekstilė, žvakės, vazelės, tuomet ir sukuriama nuostabi šventės atmosfera. Gėlės kuria emociją, kuri liks ilgam ne tik Jūsų prisiminimuose, bet ir nuotraukose.</p>
            <p>Mano pagrindinė misija – padėti žmonėms sukurti įsimintinas jų švenčių istorijas. Kiekviena šventė yra individuali, todėl galutinis rezultatas niekada nebūna pasikartojantis. Kiekvieną šventę puošiu su didele meile ir atsidavimu.</p>
            <p>Jei dar neradote savo šventės (vestuvių, gimtadienio, krikštynų, įmonės vakarėlio ir t. t.) dekoratoriaus ar floristo, pasikalbėkime ir aš mielai įgyvendinsiu jūsų šventės viziją.</p>
            </div>
            <div className="vida"></div>
        </section>
        <Heading title="Atsiliepimai"/>
        <section>7</section>
        <Heading title="Instagram"/>
        <section>8</section>
    </main>
);
export default HomePage;
