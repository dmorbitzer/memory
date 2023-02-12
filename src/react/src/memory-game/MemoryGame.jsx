import * as React from 'react';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';

function MemoryGame() {
  const { cardSetId } = useParams();

  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <h1>{cardSetId}</h1>
    </Container>
  );
}

export default MemoryGame;
