import React, { useEffect, useRef, useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate, useParams } from 'react-router-dom';
import GameCard from './GameCard';

function MemoryGame() {
  const { cardSetId } = useParams();
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [removedCards, setRemovedCards] = useState([]);
  const [notMatched, setNotMatched] = useState(false);

  const navigate = useNavigate();
  const timeout = useRef(null);

  const clickReturnButton = () => {
    navigate('/menu');
  };

  const emptySelected = () => {
    setSelectedCards([]);
  };

  const clickMemoryCard = (cardId) => {
    const newSelectedCards = [...selectedCards, cardId];

    if (newSelectedCards.length === 2) {
      const cardOne = cards[newSelectedCards[0]];
      const cardTwo = cards[newSelectedCards[1]];
      if (cardOne.cardPair.id === cardTwo.cardPair.id) {
        timeout.current = setTimeout(() => {
          const newRemovedCards = [];
          for (let i = 0; i < cards.length; i += 1) {
            if (cards[i].id === cardOne.id || cards[i].id === cardTwo.id) {
              newRemovedCards.push(cards[i]);
            }
          }
          setRemovedCards(newRemovedCards.concat(removedCards));
        }, 5000);
      } else {
        setNotMatched(true);
        timeout.current = setTimeout(() => {
          setSelectedCards([]);
          setNotMatched(false);
        }, 5000);
      }
    }
    setSelectedCards(newSelectedCards);
  };

  const canSelectAnotherCard = () => {
    return selectedCards.length < 2;
  };

  const fetchData = () => {
    return fetch('/api/selectCardSet', {
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
            key={card.id}
            cardClickActionHandler={(id) => clickMemoryCard(id)}
            cardSelectCheck={() => canSelectAnotherCard()}
            currentSelectedCards={selectedCards}
            isTurned={isCardTurned}
            removedCards={removedCards}
            cards={cards}
            emptySelected={() => emptySelected()}
            notMatched={notMatched}
          />
        );
      },
    );
    content = cardList;
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
      <Box>
        <h1>Great, you won!</h1>
        <Button variant="contained" onClick={clickReturnButton}>Return</Button>
      </Box>
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
      { content }
    </Container>
  );
}

export default MemoryGame;
