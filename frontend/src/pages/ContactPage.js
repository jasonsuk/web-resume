import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Banner from '../components/Banner.js';

const ContactPage = () => {
  return (
    <>
      <section className='banner-section'>
        <Row>
          <Col md={6}>
            <Banner
              subject='Contact'
              body='Click icons to contact me via social media, or simply send an email to me!'
            />
          </Col>
          <Col md={{ span: 2 }} className='pt-3 ms-auto text-center'>
            <Row>
              <Col>
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
              <Col>
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
            </Row>
          </Col>
        </Row>
      </section>
      <section>
        <Form>
          <h1>Email Me</h1>
          <Form.Group className='mb-3' controlId='contactForm.ControlInput1'>
            <Form.Label>Your name</Form.Label>
            <Form.Control type='name' placeholder='John Doe' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='contactForm.ControlInput2'>
            <Form.Label>Your email address</Form.Label>
            <Form.Control type='email' placeholder='jdoe@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='contactForm.ControlTextarea1'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={10}
              placeholder='Write something here'
            />
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default ContactPage;
