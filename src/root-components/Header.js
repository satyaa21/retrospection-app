// src/root-components/Header.js
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  navArea: {
    display: 'flex',
    marginLeft: '100px'
  },
  link: {
    padding: '8px 5px',
    margin: '20px 20px 0px',
    cursor: 'pointer',
  },
  activeLink: {
    borderBottom: '2px solid #fff',
  }
});

function Header() {
  const location = useLocation();
  const classes = useStyles();

  const getTitle = (path) => {
    switch (path.toLowerCase()) {
      case '/':
      case '/home':
        return 'Home';
      case '/settings':
        return 'Settings';
      case '/dashboard':
        return 'Dashboard';
      default:
        return 'Retrospection App';
    }
  };

  const pages = ['Home', 'Dashboard', 'Settings'];
  const pagePaths = ['', 'dashboard', 'settings'];

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {getTitle(location.pathname)}
          </Typography>

          <Box className={classes.navArea}>
          {pages.map((page, i) => (
            <MenuItem key={page} className={classes.link + ' ' + (location.pathname.toLowerCase() === `/${pagePaths[i].toLowerCase()}` ? classes.activeLink : '')}>
              <a href={`/${pagePaths[i].toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography textalign="center">{page}</Typography>
              </a>
            </MenuItem>
          ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;