import * as React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import { CardActionArea, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const defaultBorderColor = 'background.main';
const focusBorderColor = 'secondary.main';

function CardSetPreviewTile({
  name, tags, id, setClickHandler,
}) {
  const [cardBorderColor, setBorderColor] = useState(defaultBorderColor);

  const changeBorderColor = () => {
    if (cardBorderColor === defaultBorderColor) {
      setBorderColor(focusBorderColor);
    } else {
      setBorderColor(defaultBorderColor);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    changeBorderColor();
    setClickHandler(id);
  };

  return (
    <Grid item xs={8} sm={2}>
      <CardActionArea onClick={handleClick}>
        <Card sx={{
          minHeight: 270, minWidth: 200, border: 4, borderColor: cardBorderColor,
        }}
        >
          <CardContent>
            <CardMedia
              sx={{ height: 140, mb: '0.5rem' }}
              image="https://heise.cloudimg.io/v7/_www-heise-de_/imgs/18/3/6/9/5/8/5/9/shutterstock_1937129161-1f2a1cb0690e59e9.jpeg?force_format=avif%2Cwebp%2Cjpeg&org_if_sml=1&q=70&width=763"
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
};

export default CardSetPreviewTile;
