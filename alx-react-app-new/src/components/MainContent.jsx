import React from 'react';

function MainContent() {
  return (
    <main style={{ 
      padding: '30px',
      backgroundColor: '#ecf0f1',
      minHeight: '400px'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2rem'
        }}>Main Content Area</h2>
        <p style={{ 
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#34495e',
          textAlign: 'center'
        }}>
          This is the main content area with enhanced inline styling.
        </p>
      </div>
    </main>
  );
}

export default MainContent;