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
          <button type="button">
            <span>Legal Notice</span>
          </button>
          <button type="button">
            <span>Terms and Conditions</span>
          </button>
          <button type="button">
            <span>Imprint</span>
          </button>
        </Box>
        <span className="copyright">Copyright &copy; 2022-2023 Memorizer Inc.</span>
      </Container>
    </footer>
  );
}

export default Footer;
