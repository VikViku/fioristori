import React from 'react';

import Intro from '../../components/intro/intro.component';
import Heading from '../../components/heading/heading.component';

import paslaugos1 from '../../assets/images/paslaugos_1.jpeg';

import './Homepage.style.scss';

import Testimonial from '../../components/Testimonial/Testimonial.component';
import feedback from "../../data/feedback.json";

const HomePage = () => (
    <main>
        <Intro /> 
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
        <Heading title="Galerija"/>
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

        <Heading title="Atsiliepimai"/>
        {/* <section className="testimonials">
            <input type="radio" name="testimonial" id="input-testimonial1"/>
            <input type="radio" name="testimonial" id="input-testimonial2"/>
            <input type="radio" name="testimonial" id="input-testimonial3"/>
            <input type="radio" name="testimonial" id="input-testimonial4"/>

            <div className="testimonials__inner">
                <div className="testimonial">
                    <div className="testimonial__text">
                        <p>Dar kartą noriu padėkoti Jums už tai, kad pavertėte mano vakarą stebuklingu ir ypatingu! Abejingų tikrai neliko. 🥰 Kadangi šventėje dalyvavo ne vienas menininkas, jie ypač įvertino Jūsų darbą ir meniskumą. 💜🤍 
                        Net restorano darbuotojai fotografavo salę ir kalbėjo, kad tokio skoningo papuošimo, kuris taip puikiai tinktų prie jų salės, jie dar neturėjo! 💯</p>
                        <h3 className="testimonial__author">Natalija D.</h3>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial__text">
                        <p>FioriStori - floristika ir švenčių dekoras dekoratorė Vida išpildė visus mano lūkesčius, kruopšti atsakinga ir paslaugi. Tai žmogus, kuris 120% myli savo darbą ir iš detalių sukuria woooow efektą!!!! 
                    Nestokoja patarimų ir idėjų, įsiklauso ir įsigilina į tai, ko nori jaunieji! Gėlės, kompozicijos, nuotakos puokštė ir visa aplinka buvo tai ko ir ieškojau!!!! 🤎🤍🤎 Ne vienas svečias paliko puikių atsiliepimų apie šventės dekoracijas. ❤️🥳❤️</p>
                    <h3 className="testimonial__author">Delija T.</h3>
                    </div>
                </div>

                <div className="testimonial">
                    <div className="testimonial__text">
                        <p>Vida, yra NEREALI😊!!! Esame sužavėti jos sukurtu Krikštynų dekoru. Net vyras, kuris visada kartoja, kad nėra estetas sakė, kad labai gražu😍!!! Buvo įsiklausyta ir viršyti visi norai ir lūkesčiai 🥰!!!
                        O aš - jautresnis žmogus, tai vos neapsiašarojau iš jos sukurto grožio ir jaučiamo aplinkoje nuoširdumo, jautrumo 🥰!!! Iš visos širdies AČIŪ, Jums Vida🌺🥰!</p>
                        <h3 className="testimonial__author">Neringa R.</h3>
                    </div>
                </div>
                
                <div className="testimonial">
                    <div className="testimonial__text">
                    <p>Noriu padėkoti už puikų aptarnavimą! Kovo 8 d. mama gavo puokštę iš pat ryto, kaip ir buvo sutarta. Puokštė nuostabi, sukurta atsižvelgiant į mamos skoni (buvo pasiteirauta, kokias spalvas ir gėles mano mama mėgsta).
                    Mama liko labai patenkinta. Labai geras kainos ir kokybės santykis. Ačiū ir linkiu sėkmės!</p>
                    <h3 className="testimonial__author">Lilija G.</h3>
                    </div>
                </div>                                                
            </div>

            <div class="testimonials__arrows">
                <div class="arrow arrow-left">
                    <label for="input-testimonial1"></label>
                    <label for="input-testimonial2"></label>
                    <label for="input-testimonial3"></label>
                    <label for="input-testimonial4"></label>
                    <span></span>
                </div>
                <div class="arrow arrow-right">
                    <label for="input-testimonial1"></label>
                    <label for="input-testimonial2"></label>
                    <label for="input-testimonial3"></label>
                    <label for="input-testimonial4"></label>
                    <span></span>
                </div>
            </div>

            <div class="testimonials__bullets">
                <label for="input-testimonial1">
                    <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                    </div>
                </label>
                <label for="input-testimonial2">
                    <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                    </div>
                </label>
                <label for="input-testimonial3">
                    <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                    </div>
                </label>
                <label for="input-testimonial4">
                    <div class="bullet">
                        <div>
                            <span></span>
                        </div>
                    </div>
                </label>
            </div> 

        </section>*/}

        <Testimonial testimonialData={feedback}></Testimonial>



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
        <Heading title="Instagram"/>
        <section>8</section>
    </main>
);
export default HomePage;
