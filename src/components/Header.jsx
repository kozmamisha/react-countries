import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import React from 'react';

function Header() {
  return (
      <AppBar position="static" sx={{ backgroundColor: '#fff', pr: '2rem', pl: '2rem' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1, color: '#000', fontWeight: 600 }}>
            Where in the world?
          </Typography>
          <IconButton>
            <DarkModeOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="h6" component="span">
              Dark Mode
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

export default Header;
