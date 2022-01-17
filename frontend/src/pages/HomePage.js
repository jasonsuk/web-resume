import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HomePage = () => {
  return (
    <>
      <section className='home-section-intro'>
        <Row>
          <Col md={4}>
            <h2 className='heading-style1-primary'>WHY I DO</h2>
            <h4 className='heading-style1-secondary'>About</h4>
          </Col>
          <Col md={8}></Col>
        </Row>
      </section>
      <section className='home-section-background'>
        <Row>
          <Col md={4}>
            <h2 className='heading-style1-primary'>WHO I AM</h2>
            <h4 className='heading-style1-secondary'>Background</h4>
          </Col>
          <Col md={8}></Col>
        </Row>
      </section>
      <section className='home-section-portfolio'>
        <Row>
          <Col md={4}>
            <h2 className='heading-style1-primary'>WHAT I DID</h2>
            <h4 className='heading-style1-secondary'>Portfolios</h4>
          </Col>
          <Col md={8}></Col>
        </Row>
      </section>
      <section className='home-section-skill'>
        <Row>
          <Col md={4}>
            <h2 className='heading-style1-primary'>HOW I DO</h2>
            <h4 className='heading-style1-secondary'>Skills</h4>
          </Col>
          <Col md={8}></Col>
        </Row>
      </section>
    </>
  );
};

export default HomePage;
