import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner.js';

const PortfolioPage = () => {
  return (
    <>
      <section className='banner-section'>
        <Banner
          subject=' Portfolio'
          body='Showcasing my data analytics and machine learning works'
        />
      </section>
      <section>
        <Row>
          <h2>Card component comes here</h2>
          <Col md={3}>Card1</Col>
          <Col md={3}>Card2</Col>
          <Col md={3}>Card3</Col>
          <Col md={3}>Card4</Col>
        </Row>
        <Row>
          <Col md={3}>Card5</Col>
          <Col md={3}>Card6</Col>
          <Col md={3}>Card7</Col>
          <Col md={3}>Card8</Col>
        </Row>
      </section>
    </>
  );
};

export default PortfolioPage;
