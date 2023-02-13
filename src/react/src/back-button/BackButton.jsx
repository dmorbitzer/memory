import React, { useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

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
        <ArrowBackOutlinedIcon sx={{ color: 'white', fontSize: '30px' }} />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Do you really want to forfeit?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your progress will not be saved. Do you still want to end this round?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default BackButton;
