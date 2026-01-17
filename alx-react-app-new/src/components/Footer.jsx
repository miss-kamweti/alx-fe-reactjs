import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: 'auto'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{ 
          marginBottom: '10px',
          fontSize: '1rem'
        }}>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          fontSize: '0.9rem'
        }}>
          <span style={{ color: '#3498db' }}>Privacy Policy</span>
          <span style={{ color: '#3498db' }}>Terms of Service</span>
          <span style={{ color: '#3498db' }}>Contact Us</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;