// src/Routes.jsx
import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import ProtectedRoute from '../../components/routes/ProtectedRoute';


// Import halaman
import Login from '../auth/Login';
import Register from '../auth/Register';
import Dashboard from './Dashboard';
import NotFound from '../public/NotFound';


const Routes = () => {
  return (
    <RouterRoutes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />


      {/* Catch-all Route */}
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};


export default Routes;