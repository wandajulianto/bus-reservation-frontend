import React from 'react';
import Button from '../../components/common/Button';


const Explore = () => {
  return (
    <div className="min-h-screen bg-neo-gray p-8">
      <div className="max-w-4xl mx-auto bg-neo-white border-3 border-neo-black shadow-neo p-8">
        <h1 className="text-4xl font-bold mb-6">Explore Bus Routes</h1>
        <p className="mb-4">
          Discover available bus routes and plan your journey.
        </p>
        {/* Nanti bisa ditambahkan list/grid routes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Contoh route cards */}
          {[1,2,3,4,5,6].map((route) => (
            <div 
              key={route} 
              className="border-3 border-neo-black p-4 bg-neo-gray"
            >
              <h3 className="font-bold">Route {route}</h3>
              <p>From City A to City B</p>
              <Button className="mt-2">View Details</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Explore;