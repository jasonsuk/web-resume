import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import HomeSectionContact from '../components/HomeSectionContact.js';
import HomeSectionIntro from '../components/HomeSectionIntro.js';
import HomeSectionPortfolio from '../components/HomeSectionPortfolio.js';
import HomeSectionSkill from '../components/HomeSectionSkill.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listPortfolios } from '../redux/actions/portfolioActions.js';
import { listSkills } from '../redux/actions/skillActions.js';
import { listCertificates } from '../redux/actions/certificateActions.js';

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

  const certificateList = useSelector((state) => state.certificateList);
  const { certificates } = certificateList;

  const statistics = {
    countPortfolios: portfolios.length,
    countSkills: skills.length,
    countCertificates: certificates.length,
  };

  useEffect(() => {
    dispatch(listPortfolios());
    dispatch(listSkills());
    dispatch(listCertificates());
  }, [dispatch]);
  return (
    <Container fluid>
      <Row>
        <Col xs={12} md={1} className='pt-5'>
          <HomeSectionContact />
        </Col>
        <Col xs={12} md={11}>
          {/* ========================
          INTRO/BACKGROUND SECTION
          ============================ */}
          <HomeSectionIntro statistics={statistics} />

          {/* ========================
          PORTFOLIOS SECTION
          ============================ */}
          {loadingPortfolio ? (
            <Loader />
          ) : errorPortfolio ? (
            <Message>{errorPortfolio}</Message>
          ) : (
            <HomeSectionPortfolio portfolios={portfolios} />
          )}

          {/* ========================
          SKILLS SECTION
          ============================ */}
          {loadingSkill ? (
            <Loader />
          ) : errorSkill ? (
            <Message>{errorSkill}</Message>
          ) : (
            <HomeSectionSkill skills={skills} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
