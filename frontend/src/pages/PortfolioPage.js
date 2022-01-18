import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner.js';
import PortfolioCard from '../components/PortfolioCard.js';
import { listPortfolios } from '../redux/actions/portfolioActions.js';

const PortfolioPage = () => {
  // const [portfolios, setPortfolios] = useState([])

  const dispatch = useDispatch();

  const portfolioList = useSelector((state) => state.portfolioList);
  const { loading, error, portfolios } = portfolioList;

  useEffect(() => {
    dispatch(listPortfolios());
  }, [dispatch]);

  return (
    <>
      <section className='banner-section'>
        <Banner
          subject=' Portfolio'
          body='Showcasing my data analytics and machine learning works'
        />
      </section>
      <section>
        <Row>
          {portfolios.map((portfolio) => (
            <Col md={3} key={portfolio._id}>
              <PortfolioCard portfolio={portfolio} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default PortfolioPage;
