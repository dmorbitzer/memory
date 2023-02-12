import * as React from 'react';
import Container from '@mui/material/Container';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import CardSetPreviewTile from '../cardset-preview-tile/CardSetPreviewTile';

function CardSetPreview({ setClickHandler }) {
  const [cardSetList, setCardSetList] = useState(null);

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: '{}',
  };

  const fetchData = () => {
    fetch('/api/cardSets', requestOptions)
      .then((response) => response.json())
      .then((data) => setCardSetList(data.content));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (cardSetList != null) {
    const list = cardSetList.map((set) => (<CardSetPreviewTile name={set.name} tags={set.tags} key={set.id} />));
    return (
      <Container
        spacing={1}
        sx={{
          backgroundColor: 'background.main',
        }}
        maxWidth="xl"
      >
        { list }
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
