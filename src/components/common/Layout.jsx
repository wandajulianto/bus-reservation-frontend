import React from 'react';
import { Link } from 'react-router-dom';


const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-neo-gray">
      <nav className="bg-neo-white border-b-3 border-neo-black shadow-neo">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-2xl font-bold"
          >
            BusTicket
          </Link>
          <div className="space-x-4">
            <Link 
              to="/login" 
              className="neo-button px-4 py-2"
            >
              Login
            </Link>
            <Link 
              to="/register" 
              className="neo-button px-4 py-2"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>
      
      <main>
        {children}
      </main>
      
      <footer className="bg-neo-white border-t-3 border-neo-black shadow-neo mt-8">
        <div className="container mx-auto px-4 py-4 text-center">
          © 2023 BusTicket Booking. All rights reserved.
        </div>
      </footer>
    </div>
  );
};


export default Layout;