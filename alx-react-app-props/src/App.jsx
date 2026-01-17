import React from 'react';
import { UserProvider } from './context/UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <UserProvider>
      <div style={{ 
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f5f7fa',
        minHeight: '100vh'
      }}>
        <h1 style={{ 
          color: '#2c3e50',
          textAlign: 'center',
          marginBottom: '30px'
        }}>
          User Profile with Context API
        </h1>
        <ProfilePage />
      </div>
    </UserProvider>
  );
}

export default App;
