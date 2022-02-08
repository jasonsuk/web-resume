import React from 'react';
import { Container, Row, Col, ListGroup, Badge } from 'react-bootstrap';

const HomeSectionSkill = ({ skills }) => {
  const listItemStyle = {
    borderRadius: '10px',
  };

  return (
    <>
      <section className='home-section home-section-skill'>
        <Container className='home-section-container'>
          <h3>Skills</h3>
          <h2>HOW I DO</h2>
          <Row className='mt-5'>
            <Col md={6} xl={3}>
              <h4 className='text-center'>Programming</h4>
              <ListGroup variant='flush' className='my-3'>
                {skills
                  .filter((skill) => skill.category === 'programming')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 5)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id} style={listItemStyle}>
                      {skill.name}
                      <Badge bg='primary' className='badge-custom'>
                        {skill.maturity}
                      </Badge>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
            <Col md={6} xl={3}>
              <h4 className='text-center'>Data analytics</h4>
              <ListGroup variant='flush' className='my-3'>
                {skills
                  .filter((skill) => skill.category === 'analytics')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 5)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id} style={listItemStyle}>
                      {skill.name}
                      <Badge bg='primary' className='badge-custom'>
                        {skill.maturity}
                      </Badge>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
            <Col md={6} xl={3}>
              <h4 className='text-center'>Business expertise</h4>
              <ListGroup variant='flush' className='my-3'>
                {skills
                  .filter((skill) => skill.category === 'business')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 5)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id} style={listItemStyle}>
                      {skill.name}
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
            <Col md={6} xl={3}>
              <h4 className='text-center'>Personal</h4>
              <ListGroup variant='flush' className='my-3'>
                {skills
                  .filter((skill) => skill.category === 'general')
                  .sort((a, b) => b.score - a.score)
                  .slice(0, 5)
                  .map((skill) => (
                    <ListGroup.Item key={skill._id} style={listItemStyle}>
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
