import React, { useEffect, useState } from 'react';

import './Slider.style.scss';

import imageSlider from '../../data/imageSlider.json';

const Slider =  props => {

    const[currentState, setCurrentState] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentState === 1) {
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
            </div>
        </div>
    )
};

export default Slider;