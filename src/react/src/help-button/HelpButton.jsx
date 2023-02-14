import React, { useState } from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { ClickAwayListener } from '@mui/material';

function HelpButton() {
  const [open, setOpen] = useState(false);

  const helpShort = 'Can\'t hear any sound or play videos?';
  const helpText = '\n\nPlease make sure to turn off any Adblockers or HTML autoplay disabling browser extensions and reload the page.';

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={(
          <>
            <span style={{ fontWeight: 'bold' }}>
              {helpShort}
            </span>
            <span style={{ whiteSpace: 'pre-line' }}>
              {helpText}
            </span>
          </>
        )}
        arrow
      >
        <IconButton onClick={handleTooltipOpen}>
          <HelpOutlineOutlinedIcon sx={{ color: 'white', fontSize: '30px' }} />
        </IconButton>
      </Tooltip>
    </ClickAwayListener>
  );
}

export default HelpButton;
