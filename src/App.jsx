import React from 'react';
import { useAuth } from './context/AuthContext';
import Routes from './Routes';


function App() {
  const { isLoading } = useAuth();


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }


  return (
    <div className="App">
      <Routes />
    </div>
  );
}


export default App;