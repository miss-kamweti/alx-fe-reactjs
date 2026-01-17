import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() {
  return (
    <div style={{ 
      maxWidth: '800px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '30px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h1 style={{ 
        color: '#2c3e50',
        borderBottom: '3px solid #3498db',
        paddingBottom: '10px'
      }}>
        User Profile
      </h1>
      <UserInfo />
    </div>
  );
}

export default ProfilePage;