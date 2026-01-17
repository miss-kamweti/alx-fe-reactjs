import React, { createContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com",
    age: 28,
    location: "New York",
    role: "Senior Developer"
  };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;