import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar
        bg='primary'
        variant='dark'
        className='nav-custom'
        collapseOnSelect
        expand='lg'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/' className='nav-custom__brand'>
              Home
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/portfolio'>
                <Nav.Link>
                  <i className='fas fa-briefcase'></i> Portfolios
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/blogs'>
                <Nav.Link>
                  <i className='fas fa-feather'></i> Blogs
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to='/certificate'>
                <Nav.Link>
                  <i className='fas fa-school'></i> Certificate
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
                <Nav.Link>
                  <i className='far fa-paper-plane'></i> Contact
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
