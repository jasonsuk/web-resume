import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import Statistics from '../components/Statistics.js';

const HomeSectionIntro = ({ statistics }) => {
  return (
    <>
      <section className='home-section home-section-intro'>
        <Container className='home-section-contents'>
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

      <section className='home-section home-section-background'>
        <Container className='home-section-contents'>
          <h3>Background</h3>
          <h2 style={{ marginTop: '-1.6rem' }}>WHO I AM</h2>
          <Row className='mt-5'>
            <Col md={6}>
              <Image src='images/me.jpg' className='home-background-image' />
            </Col>
            <Col md={6} className='home-background-textbox'>
              <p>
                Hi, I am Junghoon! I've developed my career in tourism with
                specialization in retail, commercial analysis and project
                management.
              </p>
              <p>
                I strive to grow my expertise in programming and data science
                because these help me solve business decision marking problems.
              </p>
              <p>
                In addition, I taught myself software engineering skills from
                front to back, and it is how to manage to build this website!
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSectionIntro;
