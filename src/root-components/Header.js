// src/root-components/Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  const getTitle = (path) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/settings':
        return 'Settings';
      case '/dashboard':
        return 'Dashboard';
      default:
        return 'Retrospection App';
    }
  };

  return (
    <header>
      <h1>{getTitle(location.pathname)}</h1>
    </header>
  );
}

export default Header;