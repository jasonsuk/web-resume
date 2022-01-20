import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listPortfolios } from '../redux/actions/portfolioActions';

const PortfolioListPage = () => {
  const dispatch = useDispatch();
  const portfolioList = useSelector((state) => state.portfolioList);
  const { loading, error, portfolios } = portfolioList;

  useEffect(() => {
    dispatch(listPortfolios());
  }, [dispatch]);

  const deletePortfolioHandler = (portfolioId) => {
    console.log('Delete skill requested.');
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='warning'>{error}</Message>
  ) : (
    <Container>
      <h2>List certificate</h2>
      <Table
        striped
        bordered
        hover
        style={{
          verticalAlign: 'middle',
          textAlign: 'center',
          marginTop: '1.6rem',
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created at</th>
            <th>Summary</th>
            <th>Key portfolio?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio) => (
            <tr key={portfolio._id}>
              <td>{portfolio._id}</td>
              <td>{portfolio.name}</td>
              <td>{portfolio.createdAt.substring(0, 10)}</td>
              <td>{portfolio.summary}</td>
              <td>{String(portfolio.isKeyPortfolio)}</td>
              <td>
                <LinkContainer to={`/admin/portfolio/${portfolio._id}/edit`}>
                  <Button className='btn-icon' variant='warning' size='md'>
                    <i className='far fa-edit'></i>
                  </Button>
                </LinkContainer>
              </td>
              <td>
                <Button
                  className='btn-icon'
                  variant='danger'
                  size='md'
                  onClick={() => deletePortfolioHandler(portfolio._id)}
                >
                  <i className='far fa-trash-alt'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default PortfolioListPage;
