import React, { useState } from 'react';
import './GameCard.css';
import * as propTypes from 'prop-types';
import ImageCard from './card-content/ImageCard';
import SoundCard from './card-content/SoundCard';
import VideoCard from './card-content/VideoCard';

function GameCard({ content, mediaSrc }) {
  const [isTurned, setIsTurned] = useState(false);

  function handleCardClick() {
    setIsTurned(!isTurned);
  }

  function getCardContent(contentType, src) {
    let contentComponent;

    switch (contentType) {
      case 'image':
        contentComponent = <ImageCard clickHandler={() => handleCardClick()} imgSrc={src} />;
        break;
      case 'sound':
        contentComponent = <SoundCard clickHandler={() => handleCardClick()} soundSrc={src} />;
        break;
      case 'video':
        contentComponent = <VideoCard clickHandler={() => handleCardClick()} videoSrc={src} />;
        break;
      default:
        contentComponent = <div>ERROR</div>;
    }
    return contentComponent;
  }

  if (isTurned) {
    return getCardContent(content, mediaSrc);
  }

  return (
    <div
      className="game-card card-back"
      onClick={handleCardClick}
      onKeyDown={handleCardClick}
      role="presentation"
    />
  );
}

GameCard.propTypes = {
  content: propTypes.string.isRequired,
  mediaSrc: propTypes.string.isRequired,
};

export default GameCard;
