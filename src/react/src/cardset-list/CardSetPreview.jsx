import * as React from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

function CardSetPreview({ setClickHandler }) {
  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <Button
        variant="outlined"
        onClick={() => setClickHandler(1)}
      >
        View cardsetid
      </Button>
    </Container>
  );
}

CardSetPreview.propTypes = {
  setClickHandler: PropTypes.func.isRequired,
};

export default CardSetPreview;
