import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center',
      padding: '40px',
      backgroundColor: '#f5f7fa',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      maxWidth: '500px',
      margin: '50px auto'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        marginBottom: '30px'
      }}>Counter Application</h2>
      
      <p style={{ 
        fontSize: '3rem',
        fontWeight: 'bold',
        color: count > 0 ? 'green' : count < 0 ? 'red' : 'blue',
        margin: '30px 0'
      }}>
        {count}
      </p>

      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        gap: '15px'
      }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#27ae60',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Decrement
        </button>

        <button
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '5px',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;