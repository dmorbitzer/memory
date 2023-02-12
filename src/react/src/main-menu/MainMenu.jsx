import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSetPreview from '../cardset-list/CardSetPreview';

function MainMenu() {
  const [currentSetId, setCurrentSetId] = useState(null);

  const selectSet = (selectedSetId) => {
    setCurrentSetId(selectedSetId);
  };

  const handlePlayClick = (e) => {
    e.preventDefault();
    useNavigate(`/match/${currentSetId}`);
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
        <CardSetPreview setClickHandler={(setId) => selectSet(setId)} />
      </Box>
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Button variant="contained" startIcon={<PlayCircle />} onClick={handlePlayClick}>
          Play set
        </Button>
      </Box>
    </Container>
  );
}

export default MainMenu;
