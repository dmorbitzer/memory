import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Backdrop } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GameCard from './game-card/GameCard';
import BackButton from './back-button/BackButton';
import HelpButton from './help-button/HelpButton';

function MemoryGame() {
  const { cardSetId } = useParams();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [removedCards, setRemovedCards] = useState([]);
  const [notMatched, setNotMatched] = useState(false);
  const [matched, setMatched] = useState(false);
  const [turn, setTurn] = useState(0);
  const { windowWidth, windowHeight } = useWindowSize();

  const navigate = useNavigate();

  const clickReturnButton = () => {
    navigate('/menu');
  };

  const emptySelected = () => {
    setSelectedCards([]);
  };

  const clickMemoryGameBody = () => {
    setTurn(turn + 1);
    if (notMatched) {
      setNotMatched(false);
    } else {
      const cardOne = cards[selectedCards[0]];
      const cardTwo = cards[selectedCards[1]];
      const newRemovedCards = [];
      for (let i = 0; i < cards.length; i += 1) {
        if (cards[i].id === cardOne.id || cards[i].id === cardTwo.id) {
          newRemovedCards.push(cards[i]);
        }
      }
      setMatched(false);
      setRemovedCards(newRemovedCards.concat(removedCards));
    }
    setSelectedCards([]);
  };

  const clickMemoryCard = (cardId) => {
    const newSelectedCards = [...selectedCards, cardId];

    if (newSelectedCards.length === 2) {
      const cardOne = cards[newSelectedCards[0]];
      const cardTwo = cards[newSelectedCards[1]];
      if (cardOne.cardPair.id !== cardTwo.cardPair.id) {
        setNotMatched(true);
      } else if (cardOne.cardPair.id === cardTwo.cardPair.id) {
        setMatched(true);
      }
    }
    setSelectedCards(newSelectedCards);
  };

  const canSelectAnotherCard = () => {
    return selectedCards.length < 2;
  };

  const fetchData = () => {
    return fetch('/webapp/api/selectCardSet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: `{"cardSetId": "${cardSetId}"}`,
    })
      .then((response) => response.json())
      .then((data) => setCards(data.cards));
  };

  useEffect(() => {
    fetchData();
  }, []);

  let content;

  if (cards != null && cards.length > 0) {
    const cardList = cards.map(
      (card, index) => {
        const isCardTurned = selectedCards.includes(index);
        return (
          <GameCard
            content={card.mediaType}
            mediaSrc={card.mediaPath}
            cardId={index}
            key={index}
            cardClickActionHandler={(id) => clickMemoryCard(id)}
            cardSelectCheck={() => canSelectAnotherCard()}
            currentSelectedCards={selectedCards}
            isTurned={isCardTurned}
            removedCards={removedCards}
            cards={cards}
            emptySelected={() => emptySelected()}
            notMatched={notMatched}
            matched={matched}
            delay={index * 500}
          />
        );
      },
    );
    content = (

      <Container>
        <Box sx={{ justifyContent: 'left', display: 'flex' }}>
          {cardList}
        </Box>
      </Container>
    );
  } else if (cards === null) {
    content = (
      <Box>
        <h1>Sry, we can&apos;t load your Memory Set please return to the Main Page</h1>
        <Button variant="contained" onClick={clickReturnButton}>Return</Button>
      </Box>
    );
  }
  if (cards.length === removedCards.length) {
    content = (
      <Container>
        <Confetti
          width={windowWidth}
          height={windowHeight}
        />
        <Box>
          <h1>Great, you won in {turn} turns!</h1>
          <Button variant="contained" onClick={clickReturnButton}>Return</Button>
        </Box>
      </Container>
    );
  }
  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <Grid container spacing={1} sx={{ textAlign: 'center' }}>
        <Grid item sx={{ mb: '0.5rem', display: 'flex' }}>
          <BackButton />
        </Grid>
        <Box>
          {
            selectedCards.length === 2
            && (
              <Typography
                variant="p"
                sx={{
                  color: 'white',
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  paddingTop: '20px',
                }}
              >Click anywhere to continue
              </Typography>
            )
            }
        </Box>
        <Grid item flexGrow={1} sx={{ mb: '0.5rem', display: 'flex', justifyContent: 'right' }}>
          <HelpButton />
        </Grid>
      </Grid>
      { content }
      <Backdrop
        sx={{ zIndex: 0, backgroundColor: 'transparent' }}
        open={selectedCards.length === 2}
        onClick={clickMemoryGameBody}
      />
    </Container>
  );
}

export default MemoryGame;
