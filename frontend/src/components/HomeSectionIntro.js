import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Statistics from '../components/Statistics.js';

const HomeSectionIntro = ({ statistics }) => {
  return (
    <>
      <section className='home-section home-section-intro'>
        <Container className='home-section-container'>
          <Row className='home-intro-contents'>
            <Col md={6} className='home-intro-heading'>
              <h3>Hi, I am Junghoon!</h3>
            </Col>
            <Col md={6} className='home-intro-image'>
              <Image src='images/me.jpg' />
            </Col>
          </Row>
          <Row className='home-intro-textbox'>
            <p>
              I work in the tourism industry with specialization in retail,
              commercial analysis and project management.
            </p>
            <p>
              At the same time, I strive to grow my expertise in data science
              and programming because these help me solve business decision
              marking problems. Additionally, I taught myself software
              engineering skills from front to back, and it is how to manage to
              build this website!
            </p>
          </Row>
        </Container>
      </section>
      <section className='home-section home-section-about'>
        <Container className='home-section-container'>
          <h3>About</h3>
          <h2 style={{ marginTop: '-1.6rem' }}>WHY I DO</h2>
          <h4 className='mt-5'>
            Portfolio web resume to showcase my data science and machine
            learning works.
            <span style={{ display: 'block' }}>
              EVERY DAY I am commited to work on a project - no matter how big
              or small it is!
            </span>
          </h4>
          <Statistics statistics={statistics} />
        </Container>
      </section>
    </>
  );
};

export default HomeSectionIntro;
