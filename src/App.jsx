import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Regras } from './pages/Regras';
import { SobreNos } from './pages/SobreNos';
import { Jogar } from './pages/Jogar';
import { Login } from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/regras" element={<Regras />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/jogar" element={<Jogar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sobre" element={<Navigate to="/sobre-nos" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}