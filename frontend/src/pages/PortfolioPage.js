import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner.js';
import PortfolioCard from '../components/PortfolioCard.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listPortfolios } from '../redux/actions/portfolioActions.js';

const PortfolioPage = () => {
  const dispatch = useDispatch();

  const portfolioList = useSelector((state) => state.portfolioList);
  const { loading, error, portfolios } = portfolioList;

  useEffect(() => {
    dispatch(listPortfolios());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <section>
          <Container>
            <Banner
              subject=' Portfolio'
              body='Showcasing my data analytics and machine learning works'
            />
            <Row>
              {portfolios.map((portfolio) => (
                <Col md={4} key={portfolio._id}>
                  <PortfolioCard portfolio={portfolio} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      )}
    </>
  );
};

export default PortfolioPage;
