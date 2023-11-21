import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  // Load the user data from localStorage on initial render
  const initialUserData = JSON.parse(localStorage.getItem('userData'));

  // Use the initial value or set it to an empty object if not found in localStorage
  const [userData, setUserData] = useState(initialUserData || {});

  // Extract user_id and userEmail from the userData
  const { user_id, userEmail } = userData;

  // Update localStorage when userData changes
  useEffect(() => {
    if (userData) {
      localStorage.setItem('userData', JSON.stringify(userData));
    } else {
      // Clear the value from localStorage if userData is null
      localStorage.removeItem('userData');
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ user_id, userEmail, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
