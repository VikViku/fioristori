import React from 'react';
import { useParams } from 'react-router-dom';

const Gallery = ({ category, activeTopic }) => {

  const defaultTopic = category.topicList[0].id;

  let topics = category.topicList.filter((el) => (el.id === activeTopic))[0];

  if (topics === undefined)
    topics = category.topicList.filter((el) => (el.id === defaultTopic))[0];

    return (
      <div className="gallery">
          {topics.list.map((image) => (
            <img key={image.id} src={image.imageUrl} alt={`Img ${image.id}`} />
          ))}
      </div>
    );
};

export default Gallery;