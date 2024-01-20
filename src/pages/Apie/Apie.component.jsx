import React from 'react';

import FadeInSection from '../../components/fadeInSection/fade-in-section.component';
import Heading from '../../components/heading/heading.component';
import vida from '../../assets/images/kureja.jpg';

import './Apie.style.scss';

const Apie = () => (
    <div className="Apie">
        <FadeInSection>
        <div className="item-holder">
            <div className="left">
                <div className="content">
                    <Heading title="Apie mane"/>
                    <p>Esu Vida, <i>FioriStori</i> įkūrėja, dekoratorė, floristė. Esu didelė gėlių mylėtoja ir tikiu jų galia, todėl kuriant šventės dekorą didelį dėmesį skiriu gėlių kompozicijoms, rūšims, spalvų derinimui.</p>
                    <p>Mano pagrindinė misija – padėti žmonėms sukurti įsimintinas jų švenčių istorijas. Kiekviena šventė yra individuali, todėl galutinis rezultatas niekada nebūna pasikartojantis. Kiekvieną šventę puošiu su didele meile ir atsidavimu.</p>
                    <p>Gėlės man yra gražiausia puošmena šventėje, o jei jas papildo spalviškai suderinta tekstilė, žvakės, vazelės, tuomet ir sukuriama nuostabi šventės atmosfera. Gėlės kuria emociją, kuri liks ilgam ne tik Jūsų prisiminimuose, bet ir nuotraukose.</p>
                    <p>Jei dar neradote savo šventės (vestuvių, gimtadienio, krikštynų, įmonės vakarėlio ir t. t.) dekoratoriaus ar floristo, pasikalbėkime ir aš mielai įgyvendinsiu jūsų šventės viziją.</p>
                </div>
            </div>
            <div className="right">
                <img src={vida} alt="kureja"/>
            </div>
        </div>
    </FadeInSection>
</div>

);
export default Apie;
