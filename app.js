// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import { CssBaseline, Box } from '@mui/material';

const App = () => (
  <Router>
    <CssBaseline />
    <Box display="flex">
      <Sidebar /> {/* Sidebar should be fixed on the left */}
      <Box component="main" flexGrow={1}> {/* Main content area */}
        <Header /> {/* Header will appear at the top */}
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Box>
    </Box>
  </Router>
);

export default App;
