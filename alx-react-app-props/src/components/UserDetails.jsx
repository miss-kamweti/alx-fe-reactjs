import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

function UserDetails() {
  const { user } = useContext(UserContext);

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
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        User Details from Context
      </h3>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        <div>
          <strong style={{ color: '#7f8c8d' }}>Name:</strong>
          <p style={{ color: '#2c3e50', fontSize: '18px', margin: '5px 0' }}>
            {user.name}
          </p>
        </div>
        
        <div>
          <strong style={{ color: '#7f8c8d' }}>Email:</strong>
          <p style={{ color: '#2c3e50', fontSize: '18px', margin: '5px 0' }}>
            {user.email}
          </p>
        </div>
        
        <div>
          <strong style={{ color: '#7f8c8d' }}>Age:</strong>
          <p style={{ color: '#2c3e50', fontSize: '18px', margin: '5px 0' }}>
            {user.age}
          </p>
        </div>
        
        <div>
          <strong style={{ color: '#7f8c8d' }}>Location:</strong>
          <p style={{ color: '#2c3e50', fontSize: '18px', margin: '5px 0' }}>
            {user.location}
          </p>
        </div>
        
        <div>
          <strong style={{ color: '#7f8c8d' }}>Role:</strong>
          <p style={{ color: '#16a085', fontSize: '18px', margin: '5px 0' }}>
            {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
