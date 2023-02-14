import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSetPreview from './cardset-preview/CardSetPreview';

function MainMenu() {
  const [currentSetId, setCurrentSetId] = useState(0);
  const navigate = useNavigate();

  const selectSet = (selectedSetId) => {
    setCurrentSetId(selectedSetId);
  };

  const handlePlayClick = (e) => {
    e.preventDefault();
    navigate(`/match/${currentSetId}`);
  };

  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <CardSetPreview
          setClickHandler={(setId) => selectSet(setId)}
          currentSetId={currentSetId}
        />
      </Box>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Button
          variant="contained"
          startIcon={<PlayCircle />}
          onClick={handlePlayClick}
          disabled={currentSetId < 1}
        >
          Play set
        </Button>
      </Box>
    </Container>
  );
}

export default MainMenu;
