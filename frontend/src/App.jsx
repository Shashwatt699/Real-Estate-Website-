import React from 'react';
import { Router , Routes , Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Link } from 'react-router-dom';
import Properties from './Pages/Properties';
import PropertyDetail from './Pages/PropertyDetail';
import UserDashboard from './Pages/UserDashboard';

const App = () => {
  return (
    <div className="text-center p-8">
        <nav>
          <Link to="/Home" className="text=white mr-4">Home</Link>
          <Link to="/properties" className='text-white'>Properties</Link>
          <Link to="/PropertyDetail" className='text-white'>PropertyDetail</Link>
          <Link to="/UserDashboard" className='text-white'>UserDashboard</Link>
        </nav>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/PropertyDetail" element={<PropertyDetail />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
        </Routes>

    </div>
  );
};

export default App;