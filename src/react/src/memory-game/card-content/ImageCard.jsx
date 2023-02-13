import React from 'react';
import * as propTypes from 'prop-types';

function ImageCard({ clickHandler, imgSrc }) {
  return (
    <div
      className="game-card card-front"
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="presentation"
    >
      <img
        className="card-front-image"
        src={imgSrc}
        alt="bla"
      />
    </div>
  );
}

ImageCard.propTypes = {
  clickHandler: propTypes.func.isRequired,
  imgSrc: propTypes.string.isRequired,
};

export default ImageCard;
