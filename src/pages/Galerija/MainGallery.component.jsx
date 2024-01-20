import React from 'react';

const Gallery = ({ images }) => {
    return (
      <div className="gallery">
        {images.list.map((image) => (
          <img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
        ))}
      </div>
    );
};

export default Gallery;
