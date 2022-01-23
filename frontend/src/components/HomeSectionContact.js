import React from 'react';

const HomeSectionContact = () => {
  return (
    <>
      <section className='home-section-contact'>
        <div className='home-contact-link'>
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
          <h5>Github</h5>
        </div>
        <div className='home-contact-link'>
          <a
            href='https://www.linkedin.com/in/junghoonsuk/'
            target='_blank'
            rel='noreferrer'
          >
            <i className='fab fa-linkedin fa-2x' style={{ color: '#000' }}></i>
          </a>
          <h5>Linkedin</h5>
        </div>
        <div className='home-contact-link'>
          <a href='/contact' rel='noreferrer'>
            <i className='far fa-envelope fa-2x' style={{ color: '#000' }}></i>
          </a>
          <h5>Email</h5>
        </div>
      </section>
    </>
  );
};

export default HomeSectionContact;
