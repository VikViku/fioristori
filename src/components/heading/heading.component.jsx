import React from 'react';

import "./heading.style.scss";

const Heading = (props) => {
    
    return <div className="linija">
        <h1>
            {props.title}
        </h1>
        <span>{props.sub}</span>
    </div>
};

export default Heading;