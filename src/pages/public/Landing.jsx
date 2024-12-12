import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';


const Landing = () => {
  return (
    <div className="min-h-screen bg-neo-gray flex flex-col">
      {/* Navbar */}
      <nav className="px-8 py-4 border-b-3 border-neo-black flex justify-between items-center">
        <div className="text-2xl font-bold">BusTicket</div>
        <div className="space-x-4">
          <Link to="/login">
            <Button>Login</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-neo-white">Register</Button>
          </Link>
        </div>
      </nav>


      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold mb-6 border-b-3 border-neo-black pb-4">
            Easy Bus Ticket Booking
          </h1>
          <p className="text-xl mb-8">
            Book your bus tickets quickly and easily. 
            Discover convenient travel options with just a few clicks.
          </p>
          <div className="space-x-4">
            <Link to="/register">
              <Button className="text-lg px-6 py-3">
                Get Started
              </Button>
            </Link>
            <Link to="/explore">
              <Button className="text-lg px-6 py-3 bg-neo-white">
                Explore Routes
              </Button>
            </Link>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="px-8 py-4 border-t-3 border-neo-black text-center">
        <p>&copy; 2023 BusTicket. All rights reserved.</p>
      </footer>
    </div>
  );
};


export default Landing;