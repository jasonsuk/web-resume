import React from 'react';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';

const HomeSectionSkill = ({ skills }) => {
  const badgeStyle = {
    position: 'absolute',
    right: '0.5rem',
    width: '6rem',
    textAlign: 'center',
  };

  return (
    <>
      <section className='home-section home-section-skill'>
        <Container className='home-section-contents'>
          <h3>Skills</h3>
          <h2 style={{ marginTop: '-1.6rem' }}>HOW I DO</h2>
          <Row className='mt-5'>
            <Col md={6}>
              <h4 className='text-center'>Programming</h4>
              <ListGroup variant='flush'>
                {skills
                  .filter((skill) => skill.category === 'programming')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 3)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id}>
                      {skill.name}
                      <Badge bg='secondary' style={badgeStyle}>
                        {skill.maturity}
                      </Badge>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
            <Col md={6}>
              <h4 className='text-center'>Data analytics</h4>
              <ListGroup variant='flush'>
                {skills
                  .filter((skill) => skill.category === 'analytics')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 3)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id}>
                      {skill.name}
                      <Badge bg='secondary' style={badgeStyle}>
                        {skill.maturity}
                      </Badge>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
          <Row className='mt-3'>
            <Col md={6}>
              <h4 className='text-center'>Business expertise</h4>
              <ListGroup variant='flush'>
                {skills
                  .filter((skill) => skill.category === 'business')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 3)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id}>
                      {skill.name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
            <Col md={6}>
              <h4 className='text-center'>General</h4>
              <ListGroup variant='flush'>
                {skills
                  .filter((skill) => skill.category === 'general')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 3)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id}>
                      {skill.name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HomeSectionSkill;
