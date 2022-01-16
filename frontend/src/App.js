import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className='container-main'>
          <h1>Welcome to my web resume.</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
