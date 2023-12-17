import React from 'react';

import Intro from '../../components/intro/intro.component';
import Heading from '../../components/heading/heading.component';

import paslaugos1 from '../../assets/images/paslaugos_1.jpeg';
import vida from '../../assets/images/kureja.jpg';

import './Homepage.style.scss';

import Testimonial from '../../components/Testimonial/Testimonial.component';
import feedback from "../../data/feedback.json";

import FadeInSection from '../../components/fadeInSection/fade-in-section.component';

const HomePage = () => {

    return (
        <main>
            <Intro /> 
            <FadeInSection>
                <section className="item-holder2">
                    <div className="left">
                        <div className="content">
                            <Heading title="Apie mane" sub="įkūrėjos žodis"/>
                            <p>Esu Vida, <i>FioriStori</i> įkūrėja, dekoratorė, floristė. Esu didelė gėlių mylėtoja ir tikiu jų galia, todėl kuriant šventės dekorą didelį dėmesį skiriu gėlių kompozicijoms, rūšims, spalvų derinimui.</p>
                            <p>Gėlės man yra gražiausia puošmena šventėje, o jei jas papildo spalviškai suderinta tekstilė, žvakės, vazelės, tuomet ir sukuriama nuostabi šventės atmosfera. Gėlės kuria emociją, kuri liks ilgam ne tik Jūsų prisiminimuose, bet ir nuotraukose.</p>
                            <p>Mano pagrindinė misija – padėti žmonėms sukurti įsimintinas jų švenčių istorijas. Kiekviena šventė yra individuali, todėl galutinis rezultatas niekada nebūna pasikartojantis. Kiekvieną šventę puošiu su didele meile ir atsidavimu.</p>
                            <p>Jei dar neradote savo šventės (vestuvių, gimtadienio, krikštynų, įmonės vakarėlio ir t. t.) dekoratoriaus ar floristo, pasikalbėkime ir aš mielai įgyvendinsiu jūsų šventės viziją.</p>
                        </div>
                    </div>
                    <div className="right">
                        <img src={vida} alt="kureja"/>
                    </div>
                </section>
            </FadeInSection>

            <FadeInSection>
                <Heading title="Paslaugos"/>
                <section className="paslaugos">
                    <div>
                        <div className="bg-image one"></div>
                        <div className="overlay">
                            <p><span>Vestuvių dekoravimas</span> <span>ir floristika</span></p>
                            <button>Daugiau</button>
                        </div>
                    </div>
                    <div>
                    <div className="bg-image two"></div>
                        <div className="overlay">
                            <p><span>Asmeninių švenčių</span> <span>dekoravimas ir floristika</span></p>
                            <button>Daugiau</button>
                        </div>
                    </div>
                    <div>
                    <div className="bg-image three"></div>
                        <div className="overlay">
                            <p><span>Bažnyčios, ceremonijos vietos</span> <span>dekoravimas ir floristika</span></p>
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
            </FadeInSection>

            <FadeInSection>
            <Heading title="Dekoracijų nuoma"/>
                <section>3</section>
            </FadeInSection>

            <FadeInSection>
                <Heading title="Galerija"/>
                <div className='wrapper'>
                    <section className="galerija">
                        <div className="galerija__item galerija__item--1">
                            <img src={paslaugos1} alt="1"/>
                        </div>
                        <div className="galerija__item galerija__item--2">
                            <img src={paslaugos1} alt="2"/>
                        </div>
                        {/* <div className="galerija__item galerija__item--3">
                            <img src={paslaugos1} alt="3"/>
                        </div>
                        <div className="galerija__item galerija__item--4">
                            <img src={paslaugos1} alt="4"/>
                        </div> */}
                        <div className="galerija__item galerija__item--5">
                            <img src={paslaugos1} alt="5"/>
                        </div>
                        <div className="galerija__item galerija__item--6">
                            <img src={paslaugos1} alt="6"/>
                        </div>
                        <div className="galerija__item galerija__item--7">
                            <img src={paslaugos1} alt="7"/>
                        </div>
                        {/* <div className="galerija__item galerija__item--8">
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
                        </div>*/}
                    </section>
                </div>
            </FadeInSection>

            <FadeInSection>
                <Heading title="Atsiliepimai"/>
                <Testimonial testimonialData={feedback}></Testimonial>
            </FadeInSection>
            
            <FadeInSection>
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
            </FadeInSection>

            <FadeInSection>
                <Heading title="Mes Instagrame" sub="čia matysite naujausias ir aktualiausias nuotraukas:"/>
                <section>8</section>
            </FadeInSection>
        </main>
    )
};
export default HomePage;
