import * as React from 'react';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { PlayCircle } from '@mui/icons-material';
import CardSetPreviewTile from './cardset-preview-tile/CardSetPreviewTile';
import ErrorCard from '../../error/ErrorCard';
import Store from '../../redux/store';

function CardSetPreview() {
  const [cardSetList, setCardSetList] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [currentSetId, setCurrentSetId] = useState(0);
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

  const setClickHandler = (selectedSetId) => {
    setCurrentSetId(selectedSetId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePlayClick = () => {
    navigate(`/match/${currentSetId}`);
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
          setClickHandler={(setId) => setClickHandler(setId)}
          currentSetId={currentSetId}
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
