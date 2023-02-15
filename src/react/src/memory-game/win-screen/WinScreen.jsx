import Confetti from 'react-confetti';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import React from 'react';
import Container from '@mui/material/Container';
import useWindowSize from 'react-use/lib/useWindowSize';
import * as propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import CelebrationIcon from '@mui/icons-material/Celebration';

function WinScreen({ turn }) {
  const { windowWidth, windowHeight } = useWindowSize();

  const navigate = useNavigate();

  const clickReturnButton = () => {
    navigate('/menu');
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', pt: 10 }}>
      <Confetti
        width={windowWidth}
        height={windowHeight}
      />
      <Box sx={{ backgroundColor: '#ffffff', p: 6, borderRadius: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          color="secondary.main"
        >
          <CelebrationIcon sx={{ fontSize: 30 }} />
        </Box>
        <h1>Great, you won in {turn} turns!</h1>
        <Button
          sx={{ mt: '1rem' }}
          variant="contained"
          onClick={clickReturnButton}
        >Return to menu
        </Button>
      </Box>
    </Container>
  );
}

WinScreen.propTypes = {
  turn: propTypes.number.isRequired,
};

export default WinScreen;
