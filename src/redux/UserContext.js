import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  // Load the userEmail from localStorage on initial render
  const initialUserEmail = localStorage.getItem('userEmail');

  // Use the initial value or set it to null if not found in localStorage
  const [userEmail, setUserEmail] = useState(initialUserEmail || null);

  // Update localStorage when userEmail changes
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem('userEmail', userEmail);
    } else {
      // Clear the value from localStorage if userEmail is null
      localStorage.removeItem('userEmail');
    }
  }, [userEmail]);

  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
}
