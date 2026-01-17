import React from 'react';

function MainContent() {
  return (
    <main style={{ 
      padding: '40px',
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
          fontSize: '28px'
        }}>
          Welcome to Our Application
        </h2>
        <div style={{ 
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <p style={{ 
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#34495e',
            textAlign: 'center'
          }}>
            This is the main content area with enhanced inline styling.
            Explore our features and learn more about what we offer.
          </p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
