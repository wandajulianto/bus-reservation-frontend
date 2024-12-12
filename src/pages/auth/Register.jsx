import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const navigate = useNavigate();
  const { dispatch } = useAuth();


  const validateForm = () => {
    const newErrors = {};


    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!validateForm()) return;


    setIsSubmitting(true);


    try {
      // Mock registration (replace with actual API call)
      const response = await mockRegister(formData);
      
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
        submit: error.message || 'Registration failed'
      }));
    } finally {
      setIsSubmitting(false);
    }
  };


  const mockRegister = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (data.email === 'user@example.com') {
      throw new Error('Email already exists');
    }


    return {
      user: { 
        id: '2', 
        name: data.name, 
        email: data.email 
      },
      token: 'fake_jwt_token_register'
    };
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-gray px-4">
      <div className="w-full max-w-md">
        <form 
          onSubmit={handleSubmit} 
          className="bg-neo-white border-3 border-neo-black shadow-neo p-8 rounded-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
          
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">
              Name
            </label>
            <input 
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({
                ...prev, 
                name: e.target.value
              }))}
              className={`w-full px-3 py-2 border-3 ${
                errors.name 
                  ? 'border-red-500 bg-red-50' 
                  : 'border-neo-black bg-neo-white'
              }`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>


          {/* Email dan Password Input serupa dengan Register */}
          {/* ... (tambahkan input email, password, confirm password) */}


          <Button 
            type="submit" 
            className="w-full mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Registering...' : 'Register'}
          </Button>


          <div className="text-center mt-4">
            <p>
              Already have an account? {' '}
              <Link 
                to="/login" 
                className="text-blue-600 hover:underline"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};


export default Register;