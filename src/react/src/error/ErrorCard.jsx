import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as propTypes from 'prop-types';
import NearbyErrorIcon from '@mui/icons-material/NearbyError';

function ErrorCard({ buttonAction, errorText, buttonText }) {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', pt: 10 }}>
      <Box sx={{ backgroundColor: '#ffffff', p: 6, borderRadius: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          color="secondary.main"
        >
          <NearbyErrorIcon sx={{ fontSize: 30 }} />
        </Box>
        <h3>{ errorText }</h3>
        { buttonAction && <Button onClick={buttonAction} variant="contained">{ buttonText }</Button> }
      </Box>
    </Container>
  );
}

ErrorCard.propTypes = {
  buttonAction: propTypes.func,
  errorText: propTypes.string.isRequired,
  buttonText: propTypes.string,
};

ErrorCard.defaultProps = {
  buttonAction: null,
  buttonText: 'Return',
};

export default ErrorCard;
