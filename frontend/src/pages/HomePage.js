import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import ContactSideBar from '../components/ContactSideBar.js';
import HomeSectionIntro from '../components/HomeSectionIntro.js';
import HomeSectionSkill from '../components/HomeSectionSkill.js';
import HomeSectionShowcase from '../components/HomeSectionShowcase.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listPortfolios } from '../redux/actions/portfolioActions.js';
import { listSkills } from '../redux/actions/skillActions.js';
import { listCertificates } from '../redux/actions/certificateActions.js';
import { listBlogs } from '../redux/actions/blogActions.js';

const HomePage = () => {
  const dispatch = useDispatch();

  const portfolioList = useSelector((state) => state.portfolioList);
  const { portfolios } = portfolioList;

  const skillList = useSelector((state) => state.skillList);
  const { loading: loadingSkill, error: errorSkill, skills } = skillList;

  const certificateList = useSelector((state) => state.certificateList);
  const { certificates } = certificateList;

  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const statistics = {
    countSkills: skills.length,
    countPortfolios: portfolios.length,
    countBlogs: blogs.length,
    countCertificates: certificates.length,
  };

  console.log(blogs);

  useEffect(() => {
    dispatch(listPortfolios());
    dispatch(listSkills());
    dispatch(listCertificates());
    dispatch(listBlogs());
  }, [dispatch]);
  return (
    <>
      <ContactSideBar />
      <Container fluid>
        {/* ========================
          INTRO/BACKGROUND SECTION
          ============================ */}
        <HomeSectionIntro statistics={statistics} />

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

        {/* ========================
          PORTFOLIOS and CERTIFICATE SECTION
          ============================ */}
        <HomeSectionShowcase statistics={statistics} />
      </Container>
    </>
  );
};

export default HomePage;
