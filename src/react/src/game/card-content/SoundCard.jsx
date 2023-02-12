import React from 'react';
import Sound from 'react-sound';
import * as propTypes from 'prop-types';
import { MusicNote } from '@mui/icons-material';

function SoundCard({ clickHandler, soundSrc }) {
  return (
    <div
      className="game-card card-front"
      onClick={clickHandler}
      onKeyDown={clickHandler}
      role="presentation"
    >
      <Sound
        url={soundSrc}
        playStatus="PLAYING"
        autoLoad
        loop
      />
      <MusicNote className="sound-card-svg" sx={{ fontSize: 150 }} />
    </div>
  );
}

SoundCard.propTypes = {
  clickHandler: propTypes.func.isRequired,
  soundSrc: propTypes.string.isRequired,
};

export default SoundCard;
