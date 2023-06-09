import React from 'react';

const Slide = props => {
  const styles = {
    height: "100%",
    width: "100%",
    backgroundImage: `url('${props.content}')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }
    return (<div style={styles}>
    </div>);
}

export default Slide;