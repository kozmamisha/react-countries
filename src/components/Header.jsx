import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import React from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Header({ mode, setMode }) {

  const bgc = mode == 'light' ? '#fff' : '#272727';
  const textColor = mode == 'light' ? '#000' : '#fff';


  return (
    <AppBar position="static" sx={{ backgroundColor: bgc, pr: '2rem', pl: '2rem' }}>
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ color: textColor, flexGrow: 1, fontWeight: 600 }}>
          Where in the world?
        </Typography>
        <IconButton onClick={() => setMode(mode == 'light' ? 'dark' : 'light')}>
          {mode == 'light' ? (
            <DarkModeOutlinedIcon sx={{ mr: 1 }} />
          ) : (
            <DarkModeIcon sx={{ mr: 1 }} />
          )}

          <Typography variant="h6" component="span">
            Dark Mode
          </Typography>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
