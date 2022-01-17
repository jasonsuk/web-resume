import React from 'react';
import { Row } from 'react-bootstrap';

const Banner = ({ subject, body }) => {
  return (
    <>
      <Row>
        <h1 className='heading-style2-primary'>{subject}</h1>
        <p className='heading-style2-text'>{body}</p>
      </Row>
    </>
  );
};

export default Banner;
