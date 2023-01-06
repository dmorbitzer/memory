import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Signup from '../sign-up/Signup';
import './LandingPage.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function LandingPage() {
  return (
    <div className="box-container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0.5}>
          <Grid item xs={5}>
            <Item>
              <Signup />
            </Item>
          </Grid>
          <Grid item xs={7}>
            <Item>
              <img src="../assets/pensioner-playing-computer-game.png" alt="Hide the pain" />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default LandingPage;
