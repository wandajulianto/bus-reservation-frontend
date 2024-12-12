import React, { useState } from 'react';
import Button from '../../components/common/Button';
import { busService } from '../../services/api';


const BookTicket = () => {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    date: ''
  });


  const [buses, setBuses] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await busService.searchBuses(searchParams);
      setBuses(response.data);
    } catch (error) {
      console.error('Search failed', error);
    }
  };


  const handleBooking = async (busId) => {
    try {
      const bookingResponse = await busService.bookTicket({
        busId,
        ...searchParams
      });
      alert('Booking successful!');
    } catch (error) {
      console.error('Booking failed', error);
    }
  };


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 border-b-3 border-neo-black pb-2">
        Book Bus Ticket
      </h1>


      <form 
        onSubmit={handleSearch} 
        className="bg-neo-white border-3 border-neo-black shadow-neo p-6 mb-6"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block mb-2 font-bold">From</label>
            <input 
              type="text"
              value={searchParams.from}
              onChange={(e) => setSearchParams(prev => ({
                ...prev, 
                from: e.target.value
              }))}
              className="w-full px-3 py-2 border-3 border-neo-black bg-neo-white"
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-bold">To</label>
            <input 
              type="text"
              value={searchParams.to}
              onChange={(e) => setSearchParams(prev => ({
                ...prev, 
                to: e.target.value
              }))}
              className="w-full px-3 py-2 border-3 border-neo-black bg-neo-white"
              required 
            />
          </div>
          <div>
            <label className="block mb-2 font-bold">Date</label>
            <input 
              type="date"
              value={searchParams.date}
              onChange={(e) => setSearchParams(prev => ({
                ...prev, 
                date: e.target.value
              }))}
              className="w-full px-3 py-2 border-3 border-neo-black bg-neo-white"
              required 
            />
          </div>
        </div>
        <Button 
          type="submit" 
          className="mt-4 w-full"
        >
          Search Buses
        </Button>
      </form>


      {buses.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold border-b-3 border-neo-black pb-2">
            Available Buses
          </h2>
          {buses.map((bus) => (
            <div 
              key={bus.id} 
              className="bg-neo-white border-3 border-neo-black shadow-neo p-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-bold">{bus.name}</h3>
                <p>{bus.from} - {bus.to}</p>
                <p>Departure: {bus.departureTime}</p>
                <p>Price: ${bus.price}</p>
              </div>
              <Button 
                onClick={() => handleBooking(bus.id)}
              >
                Book Now
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


export default BookTicket;