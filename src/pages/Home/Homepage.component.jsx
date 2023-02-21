import React from 'react';

import Intro from '../../components/intro/intro.component';
import Heading from '../../components/heading/heading.component';

import './Homepage.style.scss';

const HomePage = () => (
    <main>
        <Intro /> 
        <Heading title="Apie mane"/>
        <section className="item-holder">
            <img src="https://placehold.co/50x50/000000/fffC/png" alt=''/>
            <div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as 
                    their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
                    evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
            </div>
        </section>
        <section>3</section>
        <section>4</section>
        <section>5</section>
        <section>6</section>
        <section>7</section>
        <section>8</section>
    </main>
);
export default HomePage;
