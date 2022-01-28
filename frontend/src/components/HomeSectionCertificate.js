import React from 'react';
import { Container, Tab, Row, Col, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeSectionCertificate = ({ certificates }) => {
  const certificatesRecentThree = certificates
    .sort((a, b) => b.completedAt - a.completedAt)
    .slice(0, 3);

  const certificateFirst = certificatesRecentThree[0];

  const navItemStyle = {
    fontWeight: 500,
    textAlign: 'start',
    marginTop: '0.2rem',
    marginBottom: '0.2rem',
    borderRadius: '10px',
  };

  const tabContentStyle = {
    marginTop: '0.2rem',
    marginBottom: '0.2rem',
    padding: '0.4rem 1.2rem',
    fontWeight: 300,
    marginLeft: '2rem',
    backgroundColor: '#fff',
    borderRadius: '5px',
    height: '100%',
  };

  return (
    <>
      <section className='home-section home-section-certificate'>
        <Container className='home-section-container'>
          <h3>Certificates</h3>
          <h2 style={{ marginTop: '-1.6rem' }}>WHAT I LEARN</h2>
          <Tab.Container
            id='home-section-tabs'
            defaultActiveKey={certificateFirst ? certificateFirst._id : ''}
          >
            <Row className='mt-4'>
              <Col sm={3}>
                <Nav variant='pills' className='flex-column'>
                  {certificatesRecentThree.map((cert) => (
                    <Nav.Item key={cert._id} style={navItemStyle}>
                      <Nav.Link eventKey={cert._id}>{cert.name}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content style={tabContentStyle}>
                  {certificatesRecentThree.map((cert) => (
                    <Tab.Pane eventKey={cert._id} key={cert._id}>
                      {cert.summary}
                    </Tab.Pane>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
          <LinkContainer to='/certificate' className='d-grid gap-2  mt-5'>
            <Button variant='dark' className='text-light'>
              See all {certificates.length} certificates
            </Button>
          </LinkContainer>
        </Container>
      </section>
    </>
  );
};

export default HomeSectionCertificate;
