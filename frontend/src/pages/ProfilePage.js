import React from 'react';
import { Form } from 'react-bootstrap';

const ProfilePage = () => {
  const userProfile = {};

  return (
    <>
      <Form>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>{userProfile.name}</Form.Label>
          <Form.Control type='text' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
      </Form>
    </>
  );
};

export default ProfilePage;
