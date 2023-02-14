import * as React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import {
  CardActionArea, CardContent, CardMedia, Chip,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import './CardSetPreviewTile.css';
import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
import Box from '@mui/material/Box';

function CardSetPreviewTile({
  name, tags, id, setClickHandler, currentSetId, previewImageUrl,
}) {
  const handleClick = () => {
    setClickHandler(id);
  };

  let selectedClass = 'set-unselected card';
  if (currentSetId === id) {
    selectedClass = 'set-selected card';
  }

  const tagsArray = tags.split(';');

  const createTagChips = () => {
    if (tags !== '') {
      const chips = tagsArray.map((tag) => (
        <Chip sx={{ mt: '0.5rem' }} label={tag} size="small" />
      ));

      return (chips);
    }
    return null;
  };

  const previewImage = () => {
    if (previewImageUrl) {
      return (
        <CardMedia
          sx={{ height: 140, mb: '0.5rem' }}
          image={previewImageUrl}
        />
      );
    }
    return (
      <Box sx={{
        height: 140,
        mb: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <AnnouncementOutlinedIcon />
      </Box>
    );
  };

  return (
    <Grid item xs={8} sm={3} lg={2}>
      <CardActionArea onClick={() => handleClick()}>
        <Card
          className={selectedClass}
          sx={{
            minHeight: 290, minWidth: 200,
          }}
        >
          <CardContent>
            {previewImage()}
            <Typography variant="h5" component="div">
              {name}
            </Typography>
            {createTagChips()}
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
  previewImageUrl: PropTypes.string,
};

CardSetPreviewTile.defaultProps = {
  previewImageUrl: '',
};

export default CardSetPreviewTile;
