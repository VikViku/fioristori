import React from 'react';

import './Kontaktai.style.scss';

const Kontaktai = () => (
    <div className="kontaktai">
        <div className="form">
            <h5>Užpildykite žemiau esančią formą:</h5>
            
            <form action="">
                <p>
                <label htmlFor="fname">Jūsų vardas</label>
                <input type="text" required/>
                </p>
                <p>
                <label htmlFor="email">Jūsų el. paštas</label>
                <input type="email" required/>
                </p>
                <p>
                <label htmlFor="date">Šventės data</label>
                <input type="date" required/>
                </p>
                <p>
                <label htmlFor="">Šventės vieta</label>
                <input type="text" required/>
                </p>
                <p>
                <label htmlFor="">Šventės spalvynas</label>
                <input type="co=text" required/>
                </p>
                <p>
                <label htmlFor="">Svečių skaičius</label>
                <input type="number" required/>
                </p>
                <p className="full-width">
                <label htmlFor="">Kita svarbi informacija</label>
                <textarea name="" id="" cols="30" rows="7"></textarea>
                </p>
                <p className="full-width">
                <button>Siųsti</button>
                </p>
            </form>
        </div>
    </div>
);
export default Kontaktai;
