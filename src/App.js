import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EventView from './Components/EventView/EventView';
import FrontView from './Components/FrontView/FrontView';

// Component that redirects on click
const FrontViewRedirect = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleClick = () => {
    navigate('/EventView'); // Navigate to /EventView when clicked
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}> {/* Change cursor to indicate clickable */}
      <FrontView />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<FrontViewRedirect />} /> {/* Clickable FrontView */}
          <Route path="/EventView" element={<EventView />} /> {/* EventView component */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
