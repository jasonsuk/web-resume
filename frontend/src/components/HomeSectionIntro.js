import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  ButtonGroup,
  Button,
  Offcanvas,
  ListGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Statistics from '../components/Statistics.js';

const AboutMeOffcanvas = ({ name }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='secondary'
        onClick={handleShow}
        className='me-2'
        style={{ minWidth: '8rem' }}
      >
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as='h3'>About me</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              I orginally built my career in the tourism industry over 5+ years.
            </ListGroup.Item>
            <ListGroup.Item>
              Specalized in retail operations, project management and commercial
              analysis.
            </ListGroup.Item>
            <ListGroup.Item>
              Over past years, I discovered opportunities that data science and
              artificial intelligence can dramatically improve some out-of-date,
              inefficient business decisions and practices.
            </ListGroup.Item>
            <ListGroup.Item>
              Therefore I wish to be a practitioner who innovates my domain
              field through next-generation technologies.
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const HomeSectionIntro = ({ statistics }) => {
  return (
    <>
      <section className='home-section home-section-intro'>
        <Container className='home-section-container'>
          <Row>
            <Col md={6} className='home-intro-heading ps-5'>
              <h1>Hi, I'm</h1>
              <h1 style={{ marginTop: '-0.8rem' }}>Junghoon</h1>
              <h4>I'm a data analyst</h4>
              <p>
                I solve business management problems through next-generation
                technologies like data science and machine learning
              </p>
              <ButtonGroup className='mt-4'>
                <Button variant='primary' style={{ minWidth: '8rem' }}>
                  <Link
                    to='/files/resume_JunghoonSuk.pdf'
                    target='_blank'
                    download
                    style={{ color: 'white' }}
                  >
                    Download my resume
                  </Link>
                </Button>
                <AboutMeOffcanvas placement='end' name={'About me'} />
              </ButtonGroup>
            </Col>
            <Col md={6} className='home-intro-image'>
              <Image src='images/me_profile.png' />
            </Col>
          </Row>
        </Container>
      </section>
      <section className='home-section home-section-about'>
        <Container className='home-section-container'>
          <h3>Purpose</h3>
          <h2>WHY I DO</h2>
          <p className='mt-5 text-center'>
            I built this web resume to showcase my data science and machine
            learning works.
            <span style={{ display: 'block' }}>
              EVERY DAY I am commited to develop my skills - no matter how big
              or small it is!
            </span>
          </p>
          <Statistics statistics={statistics} />
        </Container>
      </section>
    </>
  );
};

export default HomeSectionIntro;
