import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import PortfolioPage from './pages/PortfolioPage.js';
import BlogPage from './pages/BlogPage.js';
import BlogDetailPage from './pages/BlogDetailPage.js';
import CertificatePage from './pages/CertificatePage.js';
import ContactPage from './pages/ContactPage.js';
import LoginPage from './pages/LoginPage.js';

// ADMIN
import CertificateListPage from './pages/CertificateListPage.js';
import CertificateEditPage from './pages/CertificateEditPage.js';
import SkillListPage from './pages/SkillListPage.js';
import SkillEditPage from './pages/SkillEditPage.js';
import PortfolioListPage from './pages/PortfolioListPage.js';
import PortfolioEditPage from './pages/PortfolioEditPage.js';
import ContactListPage from './pages/ContactListPage.js';
import BlogListPage from './pages/BlogListPage.js';
import BlogEditPage from './pages/BlogEditPage.js';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        {/* react-router-dom V6 Syntax */}
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/blog/:id' element={<BlogDetailPage />} />
          <Route path='/certificate' element={<CertificatePage />} />
          <Route path='/contact' element={<ContactPage />} />
          {/* ADMIN - PROTECTED */}
          <Route path='/admin/certificate' element={<CertificateListPage />} />
          <Route
            path='/admin/certificate/:id/edit'
            element={<CertificateEditPage />}
          />
          <Route path='/admin/skill' element={<SkillListPage />} />
          <Route path='/admin/skill/:id/edit' element={<SkillEditPage />} />
          <Route path='/admin/portfolio' element={<PortfolioListPage />} />
          <Route
            path='/admin/portfolio/:id/edit'
            element={<PortfolioEditPage />}
          />
          <Route path='/admin/blog' element={<BlogListPage />} />
          <Route path='/admin/blog/:id/edit' element={<BlogEditPage />} />
          <Route path='/admin/contact' element={<ContactListPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
