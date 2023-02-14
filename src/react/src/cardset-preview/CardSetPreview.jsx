import * as React from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import CardSetPreviewTile from '../cardset-preview-tile/CardSetPreviewTile';

function CardSetPreview({ setClickHandler, currentSetId }) {
  const [cardSetList, setCardSetList] = useState(null);

  const navigate = useNavigate();

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '{}',
  };

  const fetchData = () => {
    fetch('/webapp/api/cardSets', requestOptions)
      .then((response) => response.json())
      .then((data) => setCardSetList(data.content));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (cardSetList != null) {
    const list = cardSetList.map(
      (set) => (
        <CardSetPreviewTile
          name={set.name}
          tags={set.tags}
          id={set.id}
          previewImageUrl={set.previewImageUrl}
          key={set.id}
          setClickHandler={(setId) => setClickHandler(setId)}
          currentSetId={currentSetId}
        />
      ),
    );
    return (
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={6} justifyContent="center">
          { list }
        </Grid>
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
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
      >
        Return to home
      </Button>
    </Container>
  );
}

CardSetPreview.propTypes = {
  setClickHandler: PropTypes.func.isRequired,
  currentSetId: PropTypes.number.isRequired,
};

export default CardSetPreview;
