import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      backgroundColor: '#2c3e50',
      padding: '15px 0',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <div style={{ 
          fontSize: '1.8rem',
          fontWeight: 'bold'
        }}>
          <Link to="/" style={{ 
            color: '#ecf0f1',
            textDecoration: 'none'
          }}>
            TechCorp
          </Link>
        </div>

        <div style={{ 
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ 
            color: '#ecf0f1',
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Home
          </Link>
          
          <Link to="/about" style={{ 
            color: '#ecf0f1',
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            About
          </Link>
          
          <Link to="/services" style={{ 
            color: '#ecf0f1',
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Services
          </Link>
          
          <Link to="/contact" style={{ 
            color: 'white',
            textDecoration: 'none',
            fontSize: '1rem',
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#3498db',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;