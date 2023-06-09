import React, { useState, useEffect, useRef } from 'react';
import SliderContent from './SliderContent.component';
import Slide from './Slide.component';

import './Slider.style.scss';

const getWidth = () => window.innerWidth;

const Slider = props => {
  const { slides } = props;

  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];
  
  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
    transition: 0.45,
    _slides: [lastSlide, firstSlide, secondSlide]
  });

  const { activeSlide, translate, _slides, transition } = state;
  
  const autoPlayRef = useRef();
  const transitionRef = useRef();
  const resizeRef = useRef()

  useEffect(() => {
    autoPlayRef.current = nextSlide;
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });


  useEffect(() => {
    const play = () => {
        autoPlayRef.current();
    };

    const smooth = (e) => {
      console.log(e.target.className.includes('SliderContent'))
      if (e.target.className.includes('SliderContent')) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current()
    };

    let interval = null;
    
    const transitionEnd = window.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    if (props.autoPlay) interval = setInterval(play, props.autoPlay * 1000)

    return () => {
      window.addEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);

      if (props.autoPlay) {
        clearInterval(interval);
      }
    }
  }, [props.autoPlay]);

  useEffect(() => {
    console.log("hmmm"+transition)
    if (transition === 0) setState({ ...state, transition: 0.45 })
    // eslint-disable-next-line 
  }, [transition]);

  const handleResize = () => {
    setState({ ...state, translate: getWidth(), transition: 0 })
  };

  const smoothTransition = () => {
    let _slides = [];
  
    // We're at the last slide.
    if (activeSlide === slides.length - 1)
      _slides = [slides[slides.length - 2], lastSlide, firstSlide]
    // We're back at the first slide. Just reset to how it was on initial render
    else if (activeSlide === 0) _slides = [lastSlide, firstSlide, secondSlide]
    // Create an array of the previous last slide, and the next two slides that follow it.
    else _slides = slides.slice(activeSlide - 1, activeSlide + 2)
  
    setState({
      ...state,
      _slides,
      transition: 0,
      translate: getWidth()
    })
  };

  const nextSlide = () =>
  setState({
    ...state,
    translate: translate + getWidth(),
    activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1
  });

  const styles = {
        position: "relative",
        width: "100vw",
        margin: "0 auto",
        overflow: "hidden",
        whiteSpace: "nowrap"
  };

  return (
    <div style={styles} className="slider">
      <SliderContent
        translate={translate}
        transition={transition}
        width={getWidth() * _slides.length}
      >
      {_slides.map((slide, i) => (
      <Slide key={slide + i} content={slide}/>
      ))}
      </SliderContent>        
      {/* <Dots slides={slides} activeIndex={activeSlide} /> */}
      {props.children}
    </div>
  )
};

Slider.defaultProps = {
  slides: [],
  autoPlay: null
}
  
export default Slider;