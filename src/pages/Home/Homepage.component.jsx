import React from 'react';

import NewsCarousel from '../../components/news-carousel/news-carousel.component';
import Heading from '../../components/section/heading.component';

import './Homepage.style.scss';

const HomePage = () => (
    <main>
        <NewsCarousel /> 
        <Heading title="Apie mane"/>
        <section className="item-holder">
            <img src="https://placehold.co/50x50/000000/fffC/png" alt=''/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </section>
        <section>3</section>
        <section>4</section>
        <section>5</section>
        <section>6</section>
        <section>7</section>
        <section>8</section>
    </main>
);

        // <main className="container-main">

        //     <section className="item">
        //         <NewsCarousel />    
        //     </section>

            
        //     <section className="item container-inner">
        //         <img src="https://via.placeholder.com/300.png/09f/fffC/O" alt=''/>
        //         <img src="https://via.placeholder.com/300.png/09f/fffC/O" alt=''/>
        //         <img src="https://via.placeholder.com/300.png/09f/fffC/O" alt=''/>
        //     </section>
        // </main>

export default HomePage;
