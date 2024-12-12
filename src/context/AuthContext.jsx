import React, { createContext, useState, useContext, useEffect } from 'react';
import authService from '../services/authService';


const AuthContext = createContext(null);


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    // Cek autentikasi saat komponen dimuat
    const token = authService.getToken();
    const savedUser = authService.getCurrentUser();


    if (token && savedUser) {
      setUser(savedUser);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);


  const login = async (email, password) => {
    try {
      const userData = await authService.login(email, password);
      setUser(userData.user);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      setIsAuthenticated(false);
      throw error;
    }
  };


  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      return response;
    } catch (error) {
      throw error;
    }
  };


  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false);
  };


  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      login,
      register,
      logout
    }}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};


// Custom hook untuk menggunakan AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};