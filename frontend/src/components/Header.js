import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import { logout } from '../redux/actions/userAction.js';

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

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
              {userInfo ? (
                <NavDropdown title={'Admin'} id={userInfo.name}>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-sign-in-alt'></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
