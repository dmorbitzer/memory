import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { useNavigate } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import Store from '../redux/store';

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOnClick = (action) => {
    if (action === 'logo') {
      if (Store.getState().length > 0) {
        navigate('/menu');
      } else {
        navigate('/');
      }
    } else if (action === 'profile') {
      navigate('/profile');
    } else if (action === 'logout') {
      Store.dispatch({ type: 'ADD_TOKEN', payload: '' });
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

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="1">
                <Typography onClick={() => handleOnClick('profile')} textAlign="center">Profile</Typography>
              </MenuItem>
              <MenuItem key="2">
                <Typography onClick={() => handleOnClick('logout')} textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
