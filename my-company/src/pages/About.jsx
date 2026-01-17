import React from 'react';

function About() {
  return (
    <div style={{ 
      padding: '60px 20px',
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          color: '#2c3e50',
          fontSize: '2.8rem',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          About Us
        </h1>

        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
          marginBottom: '50px',
          flexWrap: 'wrap'
        }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ 
              color: '#34495e',
              marginBottom: '20px'
            }}>
              Our Story
            </h2>
            <p style={{ 
              color: '#7f8c8d',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              Our company has been providing top-notch services since 1990. 
              We specialize in various fields including technology, marketing, 
              and consultancy. With over 30 years of experience, we've helped 
              thousands of businesses achieve their goals.
            </p>
          </div>
          
          <div style={{ 
            flex: '1',
            minWidth: '300px',
            backgroundColor: '#f8f9fa',
            padding: '30px',
            borderRadius: '10px'
          }}>
            <h3 style={{ color: '#3498db', marginBottom: '15px' }}>Our Mission</h3>
            <p style={{ color: '#7f8c8d' }}>
              To empower businesses with innovative solutions that drive 
              growth and success in the digital world.
            </p>
          </div>
        </div>

        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '40px',
          borderRadius: '10px'
        }}>
          <h2 style={{ 
            color: '#2c3e50',
            marginBottom: '30px',
            textAlign: 'center'
          }}>
            Our Team
          </h2>
          
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ 
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#27ae60' }}>Expert Engineers</h4>
              <p style={{ color: '#7f8c8d' }}>50+ technical experts</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#3498db' }}>Consultants</h4>
              <p style={{ color: '#7f8c8d' }}>30+ business consultants</p>
            </div>
            
            <div style={{ 
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <h4 style={{ color: '#e74c3c' }}>Support Staff</h4>
              <p style={{ color: '#7f8c8d' }}>24/7 customer support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;