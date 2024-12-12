import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';


const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neo-gray">
      <div className="text-center bg-neo-white border-3 border-neo-black shadow-neo p-8 rounded-lg">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-2xl mb-6">Page Not Found</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};


export default NotFound;