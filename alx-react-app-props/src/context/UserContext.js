import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    location: "New York",
    role: "Senior Developer"
  });

  // Function to update user if needed
  const updateUser = (newUserData) => {
    setUser(prevUser => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
