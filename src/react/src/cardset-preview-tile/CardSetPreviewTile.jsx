import * as React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import './CardSetPreviewTile.css';

function CardSetPreviewTile({
  name, tags, id, setClickHandler, currentSetId, previewImageUrl,
}) {
  const fallbackImageUrl = 'https://lightwidget.com/wp-content/uploads/local-file-not-found-480x488.png';

  const handleClick = () => {
    setClickHandler(id);
  };

  let selectedClass = 'set-unselected card';
  if (currentSetId === id) {
    selectedClass = 'set-selected card';
  }

  return (
    <Grid item xs={8} sm={1} md={2}>
      <CardActionArea onClick={() => handleClick()}>
        <Card
          className={selectedClass}
          sx={{
            minHeight: 270, minWidth: 200,
          }}
        >
          <CardContent>
            <CardMedia
              sx={{ height: 140, mb: '0.5rem' }}
              image={previewImageUrl || fallbackImageUrl}
            />
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            <Typography sx={{ fontSize: 11, overflowWrap: 'break-word' }} color="text.secondary" gutterBottom>
              {tags}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>

    </Grid>
  );
}

CardSetPreviewTile.propTypes = {
  name: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  setClickHandler: PropTypes.func.isRequired,
  currentSetId: PropTypes.number.isRequired,
  previewImageUrl: PropTypes.string.isRequired,
};

export default CardSetPreviewTile;
