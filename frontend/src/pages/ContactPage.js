import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Banner from '../components/Banner.js';

const ContactPage = () => {
  return (
    <>
      <Container>
        <Banner
          subject='Contact'
          body='Find me on social media, or simply send an email to me!'
        />
        <Form>
          <Form.Group className='my-3' controlId='contactForm.ControlInput1'>
            <Form.Label as='h4'>Your name</Form.Label>
            <Form.Control type='name' placeholder='John Doe' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='contactForm.ControlInput2'>
            <Form.Label as='h4'>Your email address</Form.Label>
            <Form.Control type='email' placeholder='jdoe@example.com' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='contactForm.ControlTextarea1'>
            <Form.Label as='h4'>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={10}
              placeholder='Write something here'
            />
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default ContactPage;
