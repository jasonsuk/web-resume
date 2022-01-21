import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Statistics = ({ statistics }) => {
  const customRowStyle = {
    width: '50%',
    margin: '3.6rem auto 1.2rem',
    textAlign: 'center',
  };

  return (
    <>
      <Row style={customRowStyle}>
        <Col md={4}>
          <i className='fas fa-briefcase fa-3x  mb-5'></i>
          <h2>{statistics.countPortfolios}</h2>
          <p style={{ marginTop: '-1.8rem' }}>portfolios</p>
        </Col>
        <Col md={4}>
          <i className='fas fa-tools fa-3x  mb-5'></i>
          <h2>{statistics.countSkills}</h2>
          <p style={{ marginTop: '-1.8rem' }}>skills</p>
        </Col>
        <Col md={4}>
          <i className='fas fa-graduation-cap fa-3x mb-5'></i>
          <h2>{statistics.countCertificates}</h2>
          <p style={{ marginTop: '-1.8rem' }}>certificates</p>
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
