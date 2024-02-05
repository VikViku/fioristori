import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import MainGallery from "./MainGallery.component";
import CategoryMenu from "./CategoryMenu.component";
import galleryData from "../../data/galleryData";
import Heading from '../../components/heading/heading.component';

import './Galerija.style.scss';

const Galerija = () => {

    const { kategorija } = useParams();

    const fullTitle = [
        {id: 'vestuves',
        name: 'Vestuvės'},
        {id: 'krikstynos',
        name: 'Krikštynos ir gimtadieniai'},
        {id: 'kita',
        name: 'Kitos šventės'},
    ];
    const getFullTitle = fullTitle.filter((item) => item.id === kategorija)[0].name;
    const category = galleryData.filter((image) => image.category === kategorija)[0];

    const defaultTopic = category.topicList[0].id;
    const [activeTopic, setActiveTopic] = useState(defaultTopic);

    const handleSelectTopic = (topic) => {
        setActiveTopic(topic);
    };
    
    return (
        <>
        <Heading title={getFullTitle}/>

        <div className="Galerija">
            <CategoryMenu
                topics={category.topicList}
                activeTopic={activeTopic}
                onSelectTopic={handleSelectTopic}
            />
                <MainGallery category={category}
                activeTopic={activeTopic}/>
        </div>
      </>
    );
};

export default Galerija;
