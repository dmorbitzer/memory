import * as React from 'react';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardSetPreviewTile from './cardset-preview-tile/CardSetPreviewTile';
import ErrorCard from '../../error/ErrorCard';
import Store from '../../redux/store';

function CardSetPreview() {
  const [cardSetList, setCardSetList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  const requestOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: Store.getState().authToken,
    },
    body: '{}',
  };

  const fetchData = () => {
    fetch('/webapp/api/cardSets', requestOptions)
      .then((response) => {
        if (response.status !== 200) {
          setHasError(true);
        }
        return response.json();
      })
      .then((data) => setCardSetList(data.content));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePlayClick = (setId) => {
    navigate(`/match/${setId}`);
  };

  const handleInvalidAuth = () => {
    Store.dispatch({ type: 'SET_AUTH_TOKEN', payload: null });
    navigate('/login');
  };

  if (!hasError) {
    const list = cardSetList.map(
      (set) => (
        <CardSetPreviewTile
          name={set.name}
          tags={set.tags}
          id={set.id}
          previewImageUrl={set.previewImageUrl}
          key={set.id}
          setClickHandler={() => handlePlayClick(set.id)}
        />
      ),
    );
    return (
      <Container
        spacing={1}
        sx={{
          backgroundColor: 'background.main',
        }}
        maxWidth="xl"
      >
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={2} columnSpacing={4} justifyContent="center">
            { list }
          </Grid>
        </Box>
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
      <ErrorCard
        errorText="Your Session is invalid, please login again"
        buttonAction={handleInvalidAuth}
        buttonText="Login"
      />
    </Container>
  );
}

export default CardSetPreview;
