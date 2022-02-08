import React from 'react';

const ContactIcons = () => {
  return (
    <>
      <section className='icons-contact'>
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
          <p>Github</p>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/junghoonsuk/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin fa-2x' style={{ color: '#000' }}></i>
          </a>
          <p>Linkedin</p>
        </div>
      </section>
    </>
  );
};

export default ContactIcons;
