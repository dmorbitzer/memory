import * as React from 'react';
import PsychologyIcon from '@mui/icons-material/Psychology';
import './Footer.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <footer>
      <Container
        sx={{
          backgroundColor: 'primary.main',
          boxShadow: 3,
        }}
        maxWidth="false"
        className="footer-container"
      >
        <Box className="logo-container">
          <PsychologyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 45 }} />
        </Box>
        <Box>
          <span className="legal-notice">The creators of this website do not own any of the displayed imagery, sounds or videos.</span>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
