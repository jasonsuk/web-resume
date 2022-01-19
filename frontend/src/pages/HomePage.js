import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  ListGroup,
  Badge,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listPortfolios } from '../redux/actions/portfolioActions.js';
import { listSkills } from '../redux/actions/skillActions.js';

const HomePage = () => {
  const dispatch = useDispatch();

  const portfolioList = useSelector((state) => state.portfolioList);
  const {
    loading: loadingPortfolio,
    error: errorPortfolio,
    portfolios,
  } = portfolioList;

  const skillList = useSelector((state) => state.skillList);
  const { loading: loadingSkill, error: errorSkill, skills } = skillList;

  useEffect(() => {
    dispatch(listPortfolios());
    dispatch(listSkills());
  }, [dispatch]);

  const countTechSkills = skills.filter(
    (skill) => skill.category === 'technical'
  ).length;

  return (
    <>
      <section className='home-section home-section-intro'>
        <Container>
          <Row className='text-center'>
            <h3>About</h3>
            <h2 style={{ marginTop: '-1.6rem' }}>WHY I DO</h2>
          </Row>
          <Row>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis odio quod distinctio inventore cupiditate iste ex
              sequi, exercitationem sint veniam, animi, iusto aut. Aliquam harum
              culpa praesentium sequi, voluptatem delectus!
            </p>
          </Row>
        </Container>
      </section>
      <section className='home-section home-section-background'>
        <Container>
          <Row className='text-center'>
            <h3>Background</h3>
            <h2 style={{ marginTop: '-1.6rem' }}>WHO I AM</h2>
          </Row>
          <Row>
            <Col md={6}>
              <Image src='images/me.jpg' className='home-section-image' />
            </Col>
            <Col md={6}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                itaque amet dignissimos temporibus harum eum, pariatur
                recusandae delectus ad ipsa esse sunt aut rerum, ullam omnis
                similique quasi necessitatibus ducimus.
              </p>
              <h4>Key acheivements</h4>
              <ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item2</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {loadingPortfolio ? (
        <Loader />
      ) : errorPortfolio ? (
        <Message>{errorPortfolio}</Message>
      ) : (
        <section className='home-section home-section-portfolio'>
          <Container>
            <Row className='text-center'>
              <h3>Portfolios</h3>
              <h2 style={{ marginTop: '-1.6rem' }}>WHAT I DO</h2>
            </Row>
            <Row>
              {portfolios
                .sort((a, b) => a.createdAt - b.createdAt)
                .slice(0, 4)
                .map((portfolio) => (
                  <Col md={3} key={portfolio._id}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{portfolio.name}</Card.Title>
                        <Card.Text>{portfolio.summary}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
            <LinkContainer to='/portfolio' className='d-grid gap-2 mt-3'>
              <Button variant='dark'>
                See all {portfolios.length} portfolios
              </Button>
            </LinkContainer>
          </Container>
        </section>
      )}
      {loadingSkill ? (
        <Loader />
      ) : errorSkill ? (
        <Message>{errorSkill}</Message>
      ) : (
        <section className='home-section home-section-skill'>
          <Container>
            <Row className='text-center'>
              <h3>Skills</h3>
              <h2 style={{ marginTop: '-1.6rem' }}>HOW I DO</h2>
            </Row>
            <Row>
              <Col md={6}>
                <h4>Technical skills</h4>
                <ListGroup variant='flush'>
                  {skills
                    .filter((skill) => skill.category === 'technical')
                    .map((techSkill) => (
                      <ListGroup.Item key={techSkill._id}>
                        {techSkill.name}
                        <Badge
                          className='me-2'
                          bg='secondary'
                          style={{ position: 'absolute', right: 0 }}
                        >
                          {techSkill.maturity}
                        </Badge>
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Col>
              <Col md={6}>
                <h4>Transferable skills</h4>
                <ListGroup variant='flush'>
                  {skills
                    .filter((skill) => skill.category !== 'technical')
                    .slice(0, countTechSkills)
                    .map((techSkill) => (
                      <ListGroup.Item key={techSkill._id}>
                        {techSkill.name}
                      </ListGroup.Item>
                    ))}
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default HomePage;
