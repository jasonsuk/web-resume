import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const HomeSectionPortfolio = ({ portfolios }) => {
  return (
    <>
      <section className='home-section home-section-portfolio'>
        <Container className='home-section-contents'>
          <h3>Portfolios</h3>
          <h2 style={{ marginTop: '-1.6rem' }}>WHAT I DO</h2>
          <Row className='mt-5'>
            {portfolios
              .sort((a, b) => a.createdAt - b.createdAt)
              .slice(0, 4)
              .map((portfolio) => (
                <Col md={3} key={portfolio._id}>
                  <Card>
                    <Card.Body>
                      <Card.Title as='h4'>{portfolio.name}</Card.Title>
                      <Card.Text as='h5'>{portfolio.summary}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
          <LinkContainer to='/portfolio' className='d-grid gap-2 mt-5'>
            <Button variant='dark' className='text-light'>
              See all {portfolios.length} portfolios
            </Button>
          </LinkContainer>
        </Container>
      </section>
    </>
  );
};

export default HomeSectionPortfolio;
