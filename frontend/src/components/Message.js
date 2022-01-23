import React from 'react';
import { Alert } from 'react-bootstrap';

const Message = ({ children, variant }) => {
  return (
    <Alert className='text-center mb-5' variant={variant}>
      {children}
    </Alert>
  );
};

export default Message;
