import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useMatch } from 'react-router-dom';
import Banner from '../components/Banner.js';
import { ListGroup } from 'react-bootstrap';

import { listPortfolioDetail } from '../redux/actions/portfolioActions.js';

const PortfolioDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const portfolioDetail = useSelector((state) => state.portfolioDetail);
  const { loading, error, portfolio } = portfolioDetail;

  useEffect(() => {
    dispatch(listPortfolioDetail(id));
  }, [dispatch, id]);

  return (
    <>
      <section className='banner-section'>
        <Banner subject={portfolio.name} body={portfolio.summary} />
      </section>
      <section>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <div className='ms-2 me-auto'>
              <h3>Related skills</h3>
              <p>Skill1, Skill2, Skill3</p>
            </div>
          </ListGroup.Item>
          <ListGroup.Item>{portfolio.description}</ListGroup.Item>
        </ListGroup>
      </section>
    </>
  );
};

export default PortfolioDetailPage;
