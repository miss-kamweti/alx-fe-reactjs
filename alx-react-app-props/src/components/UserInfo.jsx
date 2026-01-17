import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() {
  return (
    <div style={{ 
      marginTop: '20px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: '#34495e', marginBottom: '15px' }}>
        User Information (Using Context API)
      </h2>
      <UserDetails />
    </div>
  );
}

export default UserInfo;
