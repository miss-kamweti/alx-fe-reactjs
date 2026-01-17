import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{ 
      marginTop: '20px',
      padding: '25px',
      backgroundColor: 'white',
      borderRadius: '8px',
      border: '1px solid #ddd'
    }}>
      <h3 style={{ 
        color: '#2c3e50',
        marginBottom: '20px',
        fontSize: '1.5rem'
      }}>
        User Details (Using Context API)
      </h3>
      
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '15px'
      }}>
        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <p style={{ 
            color: '#7f8c8d',
            marginBottom: '5px',
            fontSize: '0.9rem'
          }}>Name:</p>
          <p style={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>{userData.name}</p>
        </div>

        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <p style={{ 
            color: '#7f8c8d',
            marginBottom: '5px',
            fontSize: '0.9rem'
          }}>Email:</p>
          <p style={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>{userData.email}</p>
        </div>

        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <p style={{ 
            color: '#7f8c8d',
            marginBottom: '5px',
            fontSize: '0.9rem'
          }}>Age:</p>
          <p style={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>{userData.age}</p>
        </div>

        <div style={{ 
          backgroundColor: '#ecf0f1',
          padding: '15px',
          borderRadius: '5px'
        }}>
          <p style={{ 
            color: '#7f8c8d',
            marginBottom: '5px',
            fontSize: '0.9rem'
          }}>Location:</p>
          <p style={{ 
            color: '#2c3e50',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>{userData.location}</p>
        </div>
      </div>

      <div style={{ 
        marginTop: '20px',
        padding: '15px',
        backgroundColor: '#e8f4fc',
        borderRadius: '5px',
        borderLeft: '4px solid #3498db'
      }}>
        <p style={{ 
          color: '#2c3e50',
          fontWeight: 'bold',
          marginBottom: '5px'
        }}>Role:</p>
        <p style={{ 
          color: '#16a085',
          fontSize: '1.1rem'
        }}>{userData.role}</p>
      </div>
    </div>
  );
}

export default UserDetails;