import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';
import FlagCircleRoundedIcon from '@mui/icons-material/FlagCircleRounded';
import Box from '@mui/material/Box';

function BackButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleAgree = () => {
    navigate('/menu');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        onClick={handleClickOpen}
      >
        <ArrowBackOutlinedIcon sx={{
          color: 'white',
          fontSize: '30px',
          border: '3px solid white',
          borderRadius: '50px',
        }}
        />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: '2rem',
          }}
          color="secondary.main"
        >
          <FlagCircleRoundedIcon fontSize="large" />
        </Box>
        <DialogTitle sx={{ textAlign: 'center', fontSize: '26px' }} id="alert-dialog-title">
          Do you really want to forfeit?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your progress will not be saved. Do you still want to end this round?
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ display: 'flex', justifyContent: 'center', pb: '2rem' }}>
          <Button variant="contained" onClick={handleClose}>Keep playing</Button>
          <Button variant="outlined" onClick={handleAgree} autoFocus>
            forfeit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BackButton;
