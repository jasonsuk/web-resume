import React, { useState } from 'react';
import { ToastContainer, Toast } from 'react-bootstrap';

const Message = ({ children }) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);

  return (
    <ToastContainer position='top-end' className='p-3'>
      <Toast show={show} onClose={toggleShow} autohide delay={5000}>
        <Toast.Header>
          <i className='fas fa-exclamation-circle'></i>
          <strong className='ms-1 me-auto'>Error</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Message;
