/**
 * Main App component that renders the header, footer and routes between pages.
 * Routes to the About, Portfolio, Resume, Contact and Error pages.
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Contact from './Contact';
import Footer from './Footer';
import Error from './Error';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
