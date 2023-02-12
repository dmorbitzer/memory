import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

function CardSetPreviewTile({ name, tags }) {
  return (
    <Container
      spacing={1}
      sx={{
        backgroundColor: 'background.main',
      }}
      maxWidth="xl"
    >
      <Button variant="outlined">
        {name}
        {tags}
      </Button>
    </Container>
  );
}

CardSetPreviewTile.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default CardSetPreviewTile;
