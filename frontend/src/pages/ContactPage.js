import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import Banner from '../components/Banner.js';
import ContactIcons from '../components/ContactIcons.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { makeContact } from '../redux/actions/contactActions.js';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const dispatch = useDispatch();
  const history = useNavigate();

  const contactMake = useSelector((state) => state.contactMake);
  const { loading, success, error } = contactMake;

  useEffect(() => {
    if (success) {
      setSent(true);
      setTimeout(() => {
        history('/contact');
        reset();
      }, 200);
    }
  }, [success, history]);

  const reset = () => {
    setSent(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      makeContact({
        name,
        email,
        message,
      })
    );
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Message variant='warning'>{error}</Message>}

      <Container>
        <Banner
          subject='Contact'
          body='Find me on social media, or simply send an email to me!'
        />
        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className='my-2' controlId='contact-name'>
                <Form.Label as='h4'>Your name (required)</Form.Label>
                <Form.Control
                  type='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='John Doe'
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className='my-2' controlId='contact-email'>
                <Form.Label as='h4'>Your email address (required)</Form.Label>
                <Form.Control
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='jdoe@example.com'
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className='my-2' controlId='contact-message'>
            <Form.Label as='h4'>Message (optional)</Form.Label>
            <Form.Control
              as='textarea'
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='Write your message here.'
            />
          </Form.Group>
          <ButtonGroup className='d-grid gap-2 my-3'>
            <Button variant='dark' type='submit'>
              Submit
            </Button>
          </ButtonGroup>
          {sent && (
            <Message variant='success'>
              {
                'Thank you. Successfully sent your contact! Redirecting in seconds.'
              }
            </Message>
          )}
        </Form>
        <ContactIcons />
      </Container>
    </>
  );
};

export default ContactPage;
