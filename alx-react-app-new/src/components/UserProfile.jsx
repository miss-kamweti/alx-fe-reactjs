import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ 
      border: '2px solid #4a90e2',
      borderRadius: '10px',
      padding: '20px',
      margin: '15px',
      backgroundColor: '#f8f9fa',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s ease'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        fontSize: '1.8rem',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px',
        marginBottom: '15px'
      }}>{props.name}</h2>
      <p style={{ 
        fontSize: '1.1rem',
        color: '#34495e',
        marginBottom: '8px'
      }}>Age: <span style={{ 
        fontWeight: 'bold',
        color: '#e74c3c',
        fontSize: '1.2rem'
      }}>{props.age}</span></p>
      <p style={{ 
        fontSize: '1rem',
        color: '#7f8c8d',
        lineHeight: '1.6',
        fontStyle: 'italic',
        backgroundColor: '#ecf0f1',
        padding: '12px',
        borderRadius: '5px'
      }}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;