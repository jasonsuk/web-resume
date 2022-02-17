import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

const ContactSideBar = () => {
  const contactIconTextStyle = {
    fontSize: '0.8rem',
  };

  return (
    <>
      <section className='sidebar-contact'>
        <div>
          <a
            href='https://github.com/jasonsuk'
            target='_blank'
            rel='noreferrer'
          >
            <i
              className='fab fa-github-square fa-2x'
              style={{ color: '#000' }}
            ></i>
          </a>
          <p style={contactIconTextStyle}>Github</p>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/junghoonsuk/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin fa-2x' style={{ color: '#000' }}></i>
          </a>
          <p style={contactIconTextStyle}>Linkedin</p>
        </div>
        <div className='home-contact-link'>
          <LinkContainer to='/contact'>
            <i className='far fa-envelope fa-2x' style={{ color: '#000' }}></i>
          </LinkContainer>
          <p style={contactIconTextStyle}>Email</p>
        </div>
      </section>
    </>
  );
};

export default ContactSideBar;
