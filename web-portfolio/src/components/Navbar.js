import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MLink from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom';


import APP_STRINGS from '../assets/strings'


function Navbar() {
    const [anchorNav, setAnchorNav] = useState(null);

    const handleOpenNavMenu = (e) => {
        setAnchorNav(e.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorNav(null);
    };
  
    return (
      <AppBar position="fixed">
        <Container maxWidth="x1">
          <Toolbar disableGutters>
            <Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {APP_STRINGS.pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MLink href='/' sx={{ color: "white" }}>
                  About
                </MLink>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MLink href='/experience' sx={{ color: "white" }}>
                  Experience
                </MLink>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MLink href='/projects' sx={{ color: "white" }}>
                  Projects
                </MLink>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MLink href='/blog' sx={{ color: "white" }}>
                  Blog
                </MLink>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <MLink sx={{ color: "white" }}>
                  Resume
                </MLink>
              </Box>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    );
}

export default Navbar;