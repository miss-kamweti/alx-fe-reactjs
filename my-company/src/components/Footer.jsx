import React from 'react';

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      padding: '40px 20px',
      marginTop: 'auto'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '30px'
        }}>
          <div style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ 
              color: '#3498db',
              marginBottom: '20px',
              fontSize: '1.5rem'
            }}>
              TechCorp
            </h3>
            <p style={{ 
              color: '#bdc3c7',
              lineHeight: '1.6'
            }}>
              Transforming businesses with innovative technology solutions since 1990.
            </p>
          </div>

          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4 style={{ 
              color: '#ecf0f1',
              marginBottom: '20px'
            }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="/" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Home</a>
              <a href="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>About</a>
              <a href="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Services</a>
              <a href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>Contact</a>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '250px' }}>
            <h4 style={{ 
              color: '#ecf0f1',
              marginBottom: '20px'
            }}>
              Contact Info
            </h4>
            <p style={{ color: '#bdc3c7', marginBottom: '10px' }}>
              📍 123 Business Street, City, Country
            </p>
            <p style={{ color: '#bdc3c7', marginBottom: '10px' }}>
              📞 (123) 456-7890
            </p>
            <p style={{ color: '#bdc3c7' }}>
              ✉️ info@mycompany.com
            </p>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid #34495e',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <p style={{ color: '#bdc3c7' }}>
            &copy; {new Date().getFullYear()} TechCorp. All rights reserved.
          </p>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            marginTop: '10px'
          }}>
            <span style={{ color: '#3498db', cursor: 'pointer' }}>Privacy Policy</span>
            <span style={{ color: '#3498db', cursor: 'pointer' }}>Terms of Service</span>
            <span style={{ color: '#3498db', cursor: 'pointer' }}>Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;