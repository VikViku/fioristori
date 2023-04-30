import React from 'react';

import './Kontaktai.style.scss';

const Kontaktai = () => (
    <div className="kontaktai">
        <div class="form">
            <h5>Užpildykite žemiau esančią formą:</h5>
            
            <form action="">
                <p>
                <label for="fname">Jūsų vardas</label>
                <input type="text" required/>
                </p>
                <p>
                <label for="email">Jūsų el. paštas</label>
                <input type="email" required/>
                </p>
                <p>
                <label for="date">Šventės data</label>
                <input type="date" required/>
                </p>
                <p>
                <label for="">Šventės vieta</label>
                <input type="text" required/>
                </p>
                <p>
                <label for="">Šventės spalvynas</label>
                <input type="text" required/>
                </p>
                <p>
                <label for="">Svečių skaičius</label>
                <input type="number" required/>
                </p>
                <p class="full-width">
                <label for="">Kita svarbi informacija</label>
                <textarea name="" id="" cols="30" rows="7"></textarea>
                </p>
                <p class="full-width">
                <button>Siųsti</button>
                </p>
            </form>
        </div>
    </div>
);
export default Kontaktai;
