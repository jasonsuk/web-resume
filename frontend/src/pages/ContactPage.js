import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Form, ButtonGroup, Button } from 'react-bootstrap';
import Banner from '../components/Banner.js';
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
      }, 3000);
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
      {sent && (
        <Message variant='success'>
          {'Thank you. Successfully sent your contact! Redirecting in seconds.'}
        </Message>
      )}
      <Container>
        <Banner
          subject='Contact'
          body='Find me on social media, or simply send an email to me!'
        />
        <Form onSubmit={submitHandler}>
          <Form.Group className='my-3' controlId='contactForm.ControlInput1'>
            <Form.Label as='h4'>Your name (required)</Form.Label>
            <Form.Control
              type='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
            />
          </Form.Group>
          <Form.Group className='my-3' controlId='contactForm.ControlInput2'>
            <Form.Label as='h4'>Your email address (required)</Form.Label>
            <Form.Control
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='jdoe@example.com'
            />
          </Form.Group>
          <Form.Group className='my-3' controlId='contactForm.ControlTextarea1'>
            <Form.Label as='h4'>Message (optional)</Form.Label>
            <Form.Control
              as='textarea'
              rows={10}
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
        </Form>
      </Container>
    </>
  );
};

export default ContactPage;
