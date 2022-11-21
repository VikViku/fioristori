import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './news-carousel.style.css';

const NewsCarousel = () => (

    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://via.placeholder.com/1400x800.png?text=Awaiting+images"
                alt="Third slide"
            />

            {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
        </Carousel.Item>
    </Carousel>


)

export default NewsCarousel;