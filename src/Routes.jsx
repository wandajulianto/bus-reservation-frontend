import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import ProtectedRoute from './components/routes/ProtectedRoute';


// Import pages
import Landing from './pages/public/Landing';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/dashboard/Dashboard';
import NotFound from './pages/public/NotFound';


const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />


      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};


export default Routes;