import React from 'react';
import * as propTypes from 'prop-types';

function ImageCard({ imgSrc }) {
  return (
    <div
      className="game-card card-front"
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
  imgSrc: propTypes.string.isRequired,
};

export default ImageCard;
