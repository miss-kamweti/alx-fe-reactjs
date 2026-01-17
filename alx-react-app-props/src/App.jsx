import React from 'react';
import { UserProvider } from './context/UserContext';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <UserProvider>
      <div style={{ padding: '20px' }}>
        <ProfilePage />
      </div>
    </UserProvider>
  );
}

export default App;