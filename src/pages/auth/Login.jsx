import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';


const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const { state, dispatch } = useAuth();
  const navigate = useNavigate();


  // Validasi form
  const validateForm = () => {
    const newErrors = {};


    // Validasi email
    if (!credentials.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Email is invalid';
    }


    // Validasi password
    if (!credentials.password) {
      newErrors.password = 'Password is required';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  // Handler login
  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validasi form sebelum submit
    if (!validateForm()) {
      return;
    }


    setIsSubmitting(true);
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulasi pemanggilan API (ganti dengan actual API call)
      const response = await mockLogin(credentials.email, credentials.password);
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: response.user,
          token: response.token
        }
      });
      
      navigate('/dashboard');
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message
      });
      
      setErrors(prev => ({
        ...prev,
        submit: error.message || 'Login failed'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };


  // Mock login function (replace with actual API call)
  const mockLogin = async (email, password) => {
    // Simulasi delay dan validasi
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'user@example.com' && password === 'password123') {
      return {
        user: { 
          id: '1', 
          name: 'John Doe', 
          email: email 
        },
        token: 'fake_jwt_token'
      };
    } else {
      throw new Error('Invalid email or password');
    }
  };


  // Effect untuk redirect jika sudah login
  useEffect(() => {
    if (state.isAuthenticated) {
      navigate('/dashboard');
    }
  }, [state.isAuthenticated, navigate]);


  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-gray px-4">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleLogin} 
          className="bg-neo-white border-3 border-neo-black shadow-neo p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          
          {/* Email Input */}
          <div className="mb-4">
            <label 
              htmlFor="email" 
              className="block mb-2 font-bold"
            >
              Email
            </label>
            <input 
              type="email"
              id="email"
              value={credentials.email}
              onChange={(e) => setCredentials(prev => ({
                ...prev, 
                email: e.target.value
              }))}
              className={`w-full px-3 py-2 border-3 ${
                errors.email 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-neo-black bg-neo-white'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>


          {/* Password Input */}
          <div className="mb-4">
            <label 
              htmlFor="password" 
              className="block mb-2 font-bold"
            >
              Password
            </label>
            <input 
              type="password"
              id="password"
              value={credentials.password}
              onChange={(e) => setCredentials(prev => ({
                ...prev, 
                password: e.target.value
              }))}
              className={`w-full px-3 py-2 border-3 ${
                errors.password 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-neo-black bg-neo-white'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>


          {/* Global Error Message */}
          {errors.submit && (
            <div className="mb-4 p-3 bg-red-100 border-3 border-red-500 text-red-700 rounded">
              {errors.submit}
            </div>
          )}


          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>


          {/* Register Link */}
          <div className="text-center mt-4">
            <p>
              Don't have an account? {' '}
              <Link 
                to="/register" 
                className="text-blue-600 hover:underline"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Login;