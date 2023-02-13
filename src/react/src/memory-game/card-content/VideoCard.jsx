import React from 'react';
import * as propTypes from 'prop-types';
import ReactPlayer from 'react-player';

function VideoCard({ clickHandler, videoSrc }) {
  return (
    <div
      className="game-card card-front"
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="presentation"
    >
      <div className="player-container">
        <ReactPlayer
          controls
          url={videoSrc}
          playing
          loop
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  clickHandler: propTypes.func.isRequired,
  videoSrc: propTypes.string.isRequired,
};

export default VideoCard;
