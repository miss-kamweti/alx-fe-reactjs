import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '25px 20px',
      marginTop: 'auto'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{ 
          marginBottom: '15px',
          fontSize: '16px'
        }}>
          &copy; {new Date().getFullYear()} My React Application. All rights reserved.
        </p>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '25px',
          fontSize: '14px'
        }}>
          <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Terms of Service</a>
          <a href="#" style={{ color: '#3498db', textDecoration: 'none' }}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
