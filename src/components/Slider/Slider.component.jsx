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
                setCurrentState(1)
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
            {/* <div className="transparent-background"></div> */}
            <div className="description">
                <div>
                    {/* <h1>{imageSlider[currentState].title}</h1>
                    <p>{imageSlider[currentState].desc}</p> */}
                    {props.children}
                </div>
            </div>
            {/* <svg viewBox="0 0 1440 200" class="wave" preserveAspectRatio="none">
        <path fill="#f4f4f4" fill-opacity="1" d="M0,128L40,117.3C80,107,160,85,240,90.7C320,96,400,128,480,154.7C560,181,640,203,720,192C800,181,880,139,960,106.7C1040,75,1120,53,1200,58.7C1280,64,1360,96,1400,112L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
    </svg> */}
        </div>
    )
};

export default Slider;