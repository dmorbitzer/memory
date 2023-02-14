import React, { useEffect } from 'react';
import './GameCard.css';
import * as propTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import { Grow } from '@mui/material';
import Box from '@mui/material/Box';
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
    removedCards,
    cards,
    emptySelected,
    notMatched,
    matched,
    delay,
  },
) {
  const [show, setShow] = React.useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [show]);

  const clickCardAction = (id) => {
    if (cardSelectCheck()) {
      cardClickActionHandler(id);
    }
  };

  const getCardContent = (contentType, src, isPlaying) => {
    let contentComponent;

    switch (contentType) {
      case 'image':
        contentComponent = (
          <ImageCard imgSrc={src} />
        );
        break;
      case 'sound':
        contentComponent = (
          <SoundCard
            soundSrc={src}
            isTurned={isPlaying}
          />
        );
        break;
      case 'video':
        contentComponent = (
          <VideoCard
            videoSrc={src}
            isPlaying={isPlaying}
          />
        );
        break;
      default:
        contentComponent = <div>ERROR</div>;
    }
    return contentComponent;
  };

  const getIsIn = () => {
    const selfCard = cards[cardId];
    let isIn = true;

    removedCards.forEach((card) => {
      if (card.id === selfCard.id) {
        isIn = false;
      }
    });

    return isIn && show;
  };

  const removeCards = (cardDisplayed) => {
    if (!cardDisplayed) {
      emptySelected();
    }
  };

  let animatedClass = 'game-card-container';
  if (isTurned && notMatched) {
    animatedClass = 'game-card-container animate__animated animate__headShake animate__delay-1s turned';
  } else if (isTurned && matched) {
    animatedClass = 'game-card-container animate__animated animate__pulse animate__delay-1s turned';
  } else if (isTurned) {
    animatedClass = 'game-card-container turned';
  }

  return (
    <Grow in={getIsIn()} mountOnEnter addEndListener={() => removeCards(getIsIn())}>
      <Box className={animatedClass}>
        <ReactCardFlip isFlipped={isTurned} flipDirection="horizontal">
          <div
            className="game-card card-back"
            onClick={() => clickCardAction(cardId)}
            onKeyDown={() => clickCardAction(cardId)}
            role="presentation"
          />

          {getCardContent(content, mediaSrc, isTurned)}
        </ReactCardFlip>
      </Box>
    </Grow>
  );
}

GameCard.propTypes = {
  content: propTypes.string.isRequired,
  mediaSrc: propTypes.string.isRequired,
  cardId: propTypes.number.isRequired,
  cardClickActionHandler: propTypes.func.isRequired,
  cardSelectCheck: propTypes.func.isRequired,
  isTurned: propTypes.bool,
  removedCards: propTypes.array.isRequired,
  cards: propTypes.array.isRequired,
  emptySelected: propTypes.func.isRequired,
  notMatched: propTypes.bool.isRequired,
  matched: propTypes.bool.isRequired,
  delay: propTypes.number,
};

GameCard.defaultProps = {
  isTurned: false,
  delay: 0,
};

export default GameCard;
