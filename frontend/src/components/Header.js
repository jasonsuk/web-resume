import React from 'react';
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
          <Navbar.Brand href='/' className='nav-custom__brand'>
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/portfolios'>
                <i class='fas fa-briefcase'></i> Portfolios
              </Nav.Link>
              {/* <Nav.Link href='/blogs'>
              <i class='fas fa-feather'></i> Blogs
            </Nav.Link> */}
              <Nav.Link href='/certificates'>
                <i class='fas fa-school'></i> Certificate
              </Nav.Link>
              <Nav.Link href='/contact'>
                <i class='far fa-paper-plane'></i> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
