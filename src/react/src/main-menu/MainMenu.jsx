import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CardSetPreview from './cardset-preview/CardSetPreview';
import Store from '../redux/store';

function MainMenu() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Store.getState().authToken) {
      navigate('/login');
    }
  });

  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <CardSetPreview />
      </Box>
    </Container>
  );
}

export default MainMenu;
