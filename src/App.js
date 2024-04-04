// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FruitList from './FruitList';
import FruitDetails from './FruitDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FruitList />} />
        <Route path="/fruits/:fruit" element={<FruitDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
