import React from 'react';
import { Row } from 'react-bootstrap';

const Banner = ({ subject, body }) => {
  return (
    <>
      <Row className='banner-box'>
        <h2>{subject}</h2>
        <p>{body}</p>
      </Row>
    </>
  );
};

export default Banner;
