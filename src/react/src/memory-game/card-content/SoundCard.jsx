import React, { useState } from 'react';
import Sound from 'react-sound';
import * as propTypes from 'prop-types';
import { MusicNote } from '@mui/icons-material';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function SoundCard({ soundSrc, isTurned }) {
  const [play, setPlay] = useState(true);

  const clickCard = () => {
    console.log('click');
    setPlay(!play);
  };

  let status = 'PAUSED';
  let control = <PauseCircleIcon className="sound-card-control" sx={{ fontSize: 50 }} />;

  if (play && isTurned) {
    status = 'PLAYING';
    control = <PlayCircleIcon className="sound-card-control" sx={{ fontSize: 50 }} />;
  }

  return (
    <div
      className="game-card card-front"
      role="presentation"
      onClick={clickCard}
    >
      <Sound
        url={soundSrc}
        playStatus={status}
        autoLoad
        loop
      />
      <MusicNote className="sound-card-svg" sx={{ fontSize: 100 }} />
      {control}
    </div>
  );
}

SoundCard.propTypes = {
  soundSrc: propTypes.string.isRequired,
  isTurned: propTypes.bool.isRequired,
};

export default SoundCard;
