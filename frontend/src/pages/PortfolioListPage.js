import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listPortfolios,
  createPortfolio,
  deletePortfolio,
} from '../redux/actions/portfolioActions';

import {
  PORTFOLIO_CREATE_RESET,
  PORTFOLIO_DELETE_RESET,
} from '../redux/constants/portfolioConstants.js';

const PortfolioListPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const portfolioList = useSelector((state) => state.portfolioList);
  const { loading, error, portfolios } = portfolioList;

  const portfolioCreate = useSelector((state) => state.portfolioCreate);
  const { success: successCreate, portfolio: newPortfolio } = portfolioCreate;

  const portfolioDelete = useSelector((state) => state.portfolioDelete);
  const { success: successDelete } = portfolioDelete;

  useEffect(() => {
    dispatch({ type: PORTFOLIO_CREATE_RESET });
    dispatch({ type: PORTFOLIO_DELETE_RESET });

    if (successCreate) {
      history(`/admin/portfolio/${newPortfolio._id}/edit`);
    } else {
      dispatch(listPortfolios());
    }
  }, [dispatch, history, successCreate, successDelete, newPortfolio]);

  const createPortfolioHandler = () => {
    dispatch(createPortfolio());
  };

  const deletePortfolioHandler = (portfolioId) => {
    if (window.confirm(`Deleting a portfolio ${portfolioId}. Are you sure?`)) {
      dispatch(deletePortfolio(portfolioId));
    }
  };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='warning'>{error}</Message>
  ) : (
    <Container className='my-5'>
      <Row className='align-items-center'>
        <Col md={8}>
          <h2>List portfolios</h2>
        </Col>
        <Col style={{ textAlign: 'end' }}>
          <Button
            variant='dark'
            size='md'
            className='px-3'
            onClick={() => createPortfolioHandler()}
          >
            + Create portfolio
          </Button>
        </Col>
      </Row>
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
