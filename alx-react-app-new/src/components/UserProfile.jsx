import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid #3498db',
      borderRadius: '10px',
      padding: '20px',
      margin: '20px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        fontSize: '24px',
        marginBottom: '10px'
      }}>{props.name}</h2>
      <p style={{ 
        color: '#34495e',
        fontSize: '16px',
        marginBottom: '8px'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: '#e74c3c'
        }}>{props.age}</span>
      </p>
      <p style={{ 
        color: '#7f8c8d',
        fontSize: '14px',
        fontStyle: 'italic',
        lineHeight: '1.6'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
}

export default UserProfile;
