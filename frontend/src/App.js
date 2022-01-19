import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import PortfolioDetailPage from './pages/PortfolioDetailPage.js';
import CertificatePage from './pages/CertificatePage.js';
import ContactPage from './pages/ContactPage.js';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-5'>
        {/* react-router-dom V6 Syntax */}
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/portfolio/:id' element={<PortfolioDetailPage />} />
          <Route path='/certificate' element={<CertificatePage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
