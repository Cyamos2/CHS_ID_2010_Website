import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Directory from './pages/Directory';
import Memories from './pages/Memories';
import InMemoriam from './pages/InMemoriam';
import Venue from './pages/Venue';
import RSVP from './pages/RSVP';
import Contact from './pages/Contact';
import Superlatives from './pages/Superlatives';
import './styles/global.css';
import './styles/theme.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/directory" element={<Directory />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/in-memoriam" element={<InMemoriam />} />
            <Route path="/venue" element={<Venue />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/superlatives" element={<Superlatives />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
