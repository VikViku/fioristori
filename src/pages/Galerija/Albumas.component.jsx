import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import MainGallery from "./MainGallery.component";
import CategoryMenu from "./CategoryMenu.component";
import galleryData from "../../data/galleryData";
import Heading from '../../components/heading/heading.component';

import './Galerija.style.scss';

const Albumas = ({ images }) => {

    const { kategorija } = useParams();

    const categories = [...new Set(galleryData.map((image) => image.category))];

    const [activeCategory, setActiveCategory] = useState(categories[0]);
    
    const handleSelectCategory = (category) => {
      setActiveCategory(category);
    };
    
    const filteredImages = galleryData.filter(
      (image) => image.category === activeCategory
    );
    
    return (
        <>
        <Heading title={kategorija}/>
      <div className="Galerija">
            <CategoryMenu
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory} 
            />
            <MainGallery images={filteredImages} />
      </div>
      </>
    );
};

export default Albumas;
