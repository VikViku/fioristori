import React from 'react';

import "./heading.style.scss";

const Heading = (props) => {
    
    return <div className="linija">
        <h2>
            {props.title}
        </h2>
        <span>{props.sub}</span>
    </div>
};

export default Heading;