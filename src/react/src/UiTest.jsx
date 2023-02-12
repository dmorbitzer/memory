import React from 'react';
import Container from '@mui/material/Container';
import GameCard from './game/GameCard';


function UiTest() {
  return (
    <Container component="main">
      <h1>Ui Test</h1>
      <GameCard content="image" mediaSrc="https://assets.reedpopcdn.com/in-lord-of-the-rings-gollum-seht-ihr-ringgeister-und-legolas-vater-1578404662017.jpg/BROK/thumbnail/1200x900/quality/100/in-lord-of-the-rings-gollum-seht-ihr-ringgeister-und-legolas-vater-1578404662017.jpg" />
      <GameCard content="sound" mediaSrc="https://wegener-clan.de/media/sounds/gollum.mp3" />
      <GameCard content="video" mediaSrc="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
    </Container>
  );
}

export default UiTest;
