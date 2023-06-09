import React, { useEffect, useState } from 'react';

import './Slider.style.scss';

import imageSlider from '../../data/imageSlider.json';

const Slider2 = props => {

    const[currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 2) {
                setCurrentState(0)
            } else {
                setCurrentState(currentState+1)
            }
            return () => clearTimeout(timer);

        },5000)
    },[currentState]);

    const bgImageStyle = {
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    };
    const goToNext = (currentState) => {
        setCurrentState(currentState);
    };

    return (
        <div className="slider2">
            <div style={bgImageStyle}></div>
            <div className="transparent-background"></div>
            <div className="description">
                <div>
                    {/* <h1>{imageSlider[currentState].title}</h1>
                    <p>{imageSlider[currentState].desc}</p> */}
                    {props.children}
                </div>
                <div className="carousel-boulit">
                    {
                        imageSlider.map((imageSlide, currentState) => (
                            <span key={currentState} onClick={()=>goToNext(currentState) }></span>
                        ))
                    }

                </div>
            </div>
        </div>
    )
};

export default Slider2;