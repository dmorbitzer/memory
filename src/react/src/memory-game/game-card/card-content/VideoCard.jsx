import React from 'react';
import * as propTypes from 'prop-types';
import ReactPlayer from 'react-player';

function VideoCard({ videoSrc, isPlaying }) {
  return (
    <div
      className="game-card card-front"
      role="presentation"
    >
      <div className="player-container">
        <ReactPlayer
          controls
          url={videoSrc}
          playing={isPlaying}
          loop
          width="100%"
          height="100%"
          className="video-card-player"
        />
      </div>
    </div>
  );
}

VideoCard.propTypes = {
  videoSrc: propTypes.string.isRequired,
  isPlaying: propTypes.bool.isRequired,
};

export default VideoCard;
