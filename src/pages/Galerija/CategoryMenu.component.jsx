import React,  { useRef, useEffect } from "react";

const CategoryMenu = ({ topics, activeTopic, onSelectTopic }) => {
    const submenuRef = useRef(null);

    const handleScroll = () => {
        if (submenuRef.current) {
            const submenuWidth = submenuRef.current.clientWidth;
            const submenuScrollWidth = submenuRef.current.scrollWidth;
        if (submenuScrollWidth > submenuWidth) {
            submenuRef.current.scrollRight = submenuScrollWidth + submenuWidth;
        } 
        else {
            submenuRef.current.scrollRight = 0;
        }
    }
};

useEffect(() => {
    handleScroll();
}, []);

return (
    <div className="submenu-wrapper">

    <div className="submenu" ref={submenuRef} id="id">
        {topics.map((topic, index) => 
            <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id, index)}
                className={`category-button ${topic.id === activeTopic ? "active" : ""} ${
                index > topics.indexOf(activeTopic) ? "category-at-right" : "category-at-left"
        }`}
        >
            {topic.topic}
            </button>

        )}
    </div>
    </div>
    );
};

export default CategoryMenu;