import React, { useState, useEffect, useRef } from "react";

import "./fade-in-section.style.scss";

const FadeInSection = props => {
  const [isVisible, setVisible] = useState(false);
  const documentRef = useRef();

  useEffect(() => {
    // console.log(1);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setVisible(entry.isIntersecting);
      });
    });
    observer.observe(documentRef.current)
  }, []);

  return (
    <div
      ref={documentRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {props.children}
    </div>
  );
};


export default FadeInSection;
