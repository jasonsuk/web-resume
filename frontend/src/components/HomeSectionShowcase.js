import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeSectionShowcase = ({ statistics }) => {
  return (
    <>
      <section className='home-section home-section-showcase'>
        <Container className='home-section-container'>
          <h3>Accompliments</h3>
          <h2>WHAT I DO</h2>
          <Row className='mt-5'>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant='top'
                  src='images/homepage-portfolio.jpg'
                  className='home-showcase-img'
                />
                <Card.Body>
                  <Card.Title as='h4' className='text-center'>
                    Portfolios
                  </Card.Title>
                  <LinkContainer to='/portfolio' className='d-grid gap-2 mt-5'>
                    <Button variant='dark' className='text-light'>
                      See all {statistics.countPortfolios} portfolios
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant='top'
                  src='images/homepage-blog.jpg'
                  className='home-showcase-img'
                />
                <Card.Body>
                  <Card.Title as='h4' className='text-center'>
                    Blogs
                  </Card.Title>
                  <LinkContainer to='/blog' className='d-grid gap-2 mt-5'>
                    <Button variant='dark' className='text-light'>
                      See all {statistics.countBlogs} blogs
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img
                  variant='top'
                  src='images/homepage-certificate.jpg'
                  className='home-showcase-img'
                />
                <Card.Body>
                  <Card.Title as='h4' className='text-center'>
                    Certificates
                  </Card.Title>
                  <LinkContainer
                    to='/certificate'
                    className='d-grid gap-2 mt-5'
                  >
                    <Button variant='dark' className='text-light'>
                      See all {statistics.countCertificates} certificates
                    </Button>
                  </LinkContainer>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSectionShowcase;
