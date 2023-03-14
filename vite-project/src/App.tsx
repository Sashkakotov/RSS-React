import './styles/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/*" element={<Navigate to="/error" replace />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
