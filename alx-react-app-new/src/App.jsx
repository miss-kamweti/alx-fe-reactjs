import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';

function App() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Header />
      <MainContent />
      <div style={{ padding: '20px' }}>
        <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>User Profiles</h2>
        <UserProfile 
          name="John Doe" 
          age={28} 
          bio="Travel enthusiast and city explorer. Loves discovering new cultures and urban landscapes."
        />
        <UserProfile 
          name="Jane Smith" 
          age={32} 
          bio="Urban planner passionate about sustainable city development and community design."
        />
      </div>
      <Counter />
      <Footer />
    </div>
  );
}

export default App;