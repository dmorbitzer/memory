import React from 'react';
import './GameCard.css';
import * as propTypes from 'prop-types';
import ImageCard from './card-content/ImageCard';
import SoundCard from './card-content/SoundCard';
import VideoCard from './card-content/VideoCard';

function GameCard(
  {
    content,
    mediaSrc,
    cardId,
    cardClickActionHandler,
    cardSelectCheck,
    isTurned,
  },
) {
  const clickCardAction = (id) => {
    if (cardSelectCheck()) {
      cardClickActionHandler(id);
    }
  };

  const getCardContent = (contentType, src, id) => {
    let contentComponent;

    switch (contentType) {
      case 'image':
        contentComponent = (
          <ImageCard clickHandler={() => clickCardAction(id)} imgSrc={src} />
        );
        break;
      case 'sound':
        contentComponent = (
          <SoundCard clickHandler={() => clickCardAction(id)} soundSrc={src} />
        );
        break;
      case 'video':
        contentComponent = (
          <VideoCard clickHandler={() => clickCardAction(id)} videoSrc={src} />
        );
        break;
      default:
        contentComponent = <div>ERROR</div>;
    }
    return contentComponent;
  };

  if (isTurned) {
    return getCardContent(content, mediaSrc, cardId);
  }

  return (
    <div
      className="game-card card-back"
      onClick={() => clickCardAction(cardId)}
      onKeyDown={() => clickCardAction(cardId)}
      role="presentation"
    />
  );
}

GameCard.propTypes = {
  content: propTypes.string.isRequired,
  mediaSrc: propTypes.string.isRequired,
  cardId: propTypes.number.isRequired,
  cardClickActionHandler: propTypes.func.isRequired,
  cardSelectCheck: propTypes.func.isRequired,
  isTurned: propTypes.bool,

};

GameCard.defaultProps = {
  isTurned: false,
};

export default GameCard;
