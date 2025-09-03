import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameList from './components/GameList';
import GameDetail from './components/GameDetail';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GameList />} />
        <Route path="/game/:id" element={<GameDetail />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
