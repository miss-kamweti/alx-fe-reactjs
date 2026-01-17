import React from 'react';

function Header() {
  return (
    <header style={{ 
      backgroundColor: 'navy', 
      color: 'white', 
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        margin: '0',
        fontSize: '2.5rem',
        textTransform: 'uppercase',
        letterSpacing: '2px'
      }}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;