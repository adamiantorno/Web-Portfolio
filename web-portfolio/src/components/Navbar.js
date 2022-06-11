import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Navbar() {
  return (
    <div>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              About
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Projects
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Experience
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Blog
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Resume
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;