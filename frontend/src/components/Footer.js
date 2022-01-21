import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container className='text-center'>
        {/* <Row
          className='d-flex justify-content-md-center'
          style={{ marginTop: '2.4rem', textAlign: 'center' }}
        >
          <Col md={{ span: 2 }}>
            <a
              href='https://github.com/jasonsuk'
              target='_blank'
              rel='noreferrer'
            >
              <i
                className='fab fa-github-square fa-3x'
                style={{ color: '#000' }}
              ></i>
            </a>
            <h5>Github</h5>
          </Col>
          <Col md={{ span: 2 }}>
            <a
              href='https://www.linkedin.com/in/junghoonsuk/'
              target='_blank'
              rel='noreferrer'
            >
              <i
                className='fab fa-linkedin fa-3x'
                style={{ color: '#000' }}
              ></i>
            </a>
            <h5>Linkedin</h5>
          </Col>
        </Row> */}
        <Row>
          <Col>Copyright &copy; Junghoon Suk</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
