// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Booking from './pages/booking.js';
import Status from './components/status.js';
import Contact from './pages/contact.js';
import About from './pages/about.js';
import Admin from './pages/admin.js';
import Navbar from './components/navbar.js';
import './App.css'

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/booking" element={<Booking />} />
                    <Route path="/status" element={<Status />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
