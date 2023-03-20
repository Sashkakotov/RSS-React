import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/UI/Navbar/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Error from './pages/Error';
import './styles/App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
