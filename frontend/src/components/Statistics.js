import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Statistics = ({ statistics }) => {
  return (
    <>
      <Row className='home-statistics-row'>
        <Col sm={3}>
          <i className='fas fa-briefcase fa-3x  mb-4'></i>
          <h2>{statistics.countPortfolios}</h2>
          <p>portfolios</p>
        </Col>
        <Col sm={3}>
          <i className='fas fa-feather fa-3x  mb-4'></i>
          <h2>{statistics.countBlogs}</h2>
          <p>blogs</p>
        </Col>
        <Col sm={3}>
          <i className='fas fa-tools fa-3x  mb-4 '></i>
          <h2>{statistics.countSkills}</h2>
          <p>skills</p>
        </Col>
        <Col sm={3}>
          <i className='fas fa-graduation-cap fa-3x mb-4'></i>
          <h2>{statistics.countCertificates}</h2>
          <p>certificates</p>
        </Col>
      </Row>
    </>
  );
};

export default Statistics;
