import React from 'react';

const SliderContent = props => {
    const styles = {
        transform: `translateX(-${props.translate}px)`,
        transition: `transform ease-out ${props.transition}s`,
        height: "100%",
        width: `${props.width}px`,
        display: "flex"
    }
    return (
        <div style={styles} className="SliderContent">
            {props.children}
        </div>
    );
}
export default SliderContent;