import React from 'react';

const Gallery = ({ topicList, activeTopic}) => {

  const topics = topicList.filter((el) => el.id === activeTopic)[0];
  console.log("topicList", topicList);
  console.log("activeTopic", activeTopic);

    return (
      <div className="gallery">
        {topics.list.map((image) => (
          <img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
        ))}
      </div>
    );
};

export default Gallery;
