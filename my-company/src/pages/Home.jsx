import React from 'react';

function Home() {
  return (
    <div style={{ 
      padding: '60px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ 
          color: '#2c3e50',
          fontSize: '3.5rem',
          marginBottom: '20px'
        }}>
          Welcome to Our Company
        </h1>
        
        <p style={{ 
          color: '#7f8c8d',
          fontSize: '1.2rem',
          lineHeight: '1.8',
          marginBottom: '40px',
          maxWidth: '800px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          We are dedicated to delivering excellence in all our services. 
          With innovative solutions and a dedicated team, we transform 
          businesses for the digital age.
        </p>

        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '50px',
          flexWrap: 'wrap'
        }}>
          <div style={{ 
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            width: '300px'
          }}>
            <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Innovation</h3>
            <p style={{ color: '#7f8c8d' }}>
              Cutting-edge solutions for modern businesses.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            width: '300px'
          }}>
            <h3 style={{ color: '#2ecc71', marginBottom: '15px' }}>Quality</h3>
            <p style={{ color: '#7f8c8d' }}>
              Uncompromising quality in every project.
            </p>
          </div>

          <div style={{ 
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            width: '300px'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>Support</h3>
            <p style={{ color: '#7f8c8d' }}>
              24/7 dedicated customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;