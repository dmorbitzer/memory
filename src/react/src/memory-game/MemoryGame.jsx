import Container from '@mui/material/Container';
import { React, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

function MemoryGame() {
  const { cardSetId } = useParams();
  const [cards, setCards] = useState(null);
  const navigate = useNavigate();

  const clickReturnButton = () => {
    navigate('/menu');
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

  if (cards != null) {
    const cardList = cards.map((card) => <p>{card.name}</p>);
    return (
      <Container
        spacing={1}
        sx={{
          backgroundColor: 'background.main',
        }}
        maxWidth="xl"
      >
        { cardList }
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
      <h1>Sry, we can&apos;t load your Memory Set please return to the Main Page</h1>
      <Button variant="contained" onClick={clickReturnButton}>
        Return
      </Button>
    </Container>
  );
}

export default MemoryGame;
