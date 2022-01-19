import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { login } from '../redux/actions/userAction.js';
import FormContainer from '../components/FormContainer.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const history = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    // Redirect if already logged in
    if (userInfo) {
      history('/');
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch login
    dispatch(login(email, password));
  };

  return (
    <>
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label as='h4'>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='jdoe@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='password'>
            <Form.Label as='h4'>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <div className='d-grid gap-2 mt-5'>
            <Button type='submit' variant='dark'>
              Sign in
            </Button>
            <small className='text-center'>
              Please contact me for user registration.
            </small>
          </div>
        </Form>
      </FormContainer>
    </>
  );
};

export default LoginPage;
