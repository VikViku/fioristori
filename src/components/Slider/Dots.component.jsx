import React from 'react'

const Dot = ({ active }) => {
    const styles = {
        padding: "10px",
        marginRight: "5px",
        cursor: "pointer",
        borderRadius: "50%",
        background: `${active ? 'rgb(147, 158, 137)' : 'white'}`
    };

  return (
    <span style={styles}></span>
  );
};

const Dots = ({ slides, activeSlide }) => {
    const styles = {
        position: "absolute",
        bottom: "25px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };
    
    return (
        <div style={styles}>
            {slides.map((slide, i) => (
                <Dot key={slide} active={activeSlide === i} />
            ))}
        </div>
    );
};

export default Dots;