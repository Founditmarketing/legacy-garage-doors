import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Financing from './pages/Financing';
import Contact from './pages/Contact';
import BookOnline from './pages/BookOnline';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="financing" element={<Financing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="book-online" element={<BookOnline />} />
        </Route>
      </Routes>
    </Router>
  );
}
