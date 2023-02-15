import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useNavigate } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import Store from '../redux/store';

function Navbar() {
  const navigate = useNavigate();

  const handleOnClick = (action) => {
    if (action === 'logo') {
      if (Store.getState()) {
        navigate('/menu');
      } else {
        navigate('/');
      }
    } else if (action === 'logout') {
      Store.dispatch({ type: 'SET_AUTH_TOKEN', payload: null });
      navigate('/login');
    }
  };

  return (
    <AppBar position="static">
      <Container
        sx={{
          backgroundColor: 'primary.main',
        }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>

          <ButtonBase onClick={() => handleOnClick('logo')}>
            <PsychologyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontSize: 45 }} onClick={handleOnClick} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Memorizer
            </Typography>
          </ButtonBase>
          <Box sx={{
            flexGrow: 1,
            justifyContent: 'flex-end',
            display: { xs: 'none', md: 'flex' },
          }}
          >
            {Store.getState().authToken
              && (
                <ButtonBase onClick={() => handleOnClick('logout')}>
                  <Typography
                    variant="p"
                    sx={{
                      cursor: 'pointer',
                      borderStyle: 'solid',
                      borderRadius: '25px',
                      borderWidth: '2px',
                      padding: '5px',
                    }}
                  >
                    Logout
                  </Typography>
                </ButtonBase>
              )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
