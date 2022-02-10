import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer.js';
import { Form, Button } from 'react-bootstrap';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listPortfolioDetail,
  updatePortfolio,
} from '../redux/actions/portfolioActions.js';

import { PORTFOLIO_UPDATE_RESET } from '../redux/constants/portfolioConstants.js';

const PortfolioEditPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const portfolioDetail = useSelector((state) => state.portfolioDetail);
  const { loading, error, portfolio } = portfolioDetail;

  const portfolioUpdate = useSelector((state) => state.portfolioUpdate);
  const { success: successUpdate } = portfolioUpdate;

  // Inputs from form control
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [isKeyPortfolio, setIsKeyPortfolio] = useState(false);
  const [url, setUrl] = useState('#');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    if (successUpdate) {
      history('/admin/portfolio');
      dispatch({ type: PORTFOLIO_UPDATE_RESET });
    } else {
      if (!portfolio || portfolio._id !== id) {
        dispatch(listPortfolioDetail(id));
      } else {
        setImage(portfolio.image);
        setName(portfolio.name);
        setSummary(portfolio.summary);
        setDescription(portfolio.description);
        setUrl(portfolio.url);
        setIsKeyPortfolio(portfolio.isKeyPortfolio);
        setUrl(portfolio.url);
      }
    }
  }, [dispatch, history, successUpdate, portfolio, id]);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
    setUploading(true);

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const { data } = await axios.post('/api/uploads', formData, config);

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updatePortfolio({
        _id: id,
        image,
        name,
        summary,
        description,
        isKeyPortfolio,
        url,
      })
    );
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='warning'>{error}</Message>
      ) : (
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='image' className='mb-4'>
              <Form.Label>Portfolio image</Form.Label>
              {/* <Form.Control
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              /> */}
              <Form.Control type='file' onChange={uploadFileHandler} />
              {uploading && <Loader />}
            </Form.Group>
            <Form.Group controlId='name' className='mb-4'>
              <Form.Label>Portfolio name</Form.Label>
              <Form.Control
                type='text'
                placeholder='What is the best title for your portfolio?'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='summary' className='mb-4'>
              <Form.Label>Portfolio summary</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='What is your portfolio about?'
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='description' className='mb-4'>
              <Form.Label>Portfolio description</Form.Label>
              <Form.Control
                as='textarea'
                rows={8}
                placeholder='Describe yoru portfolio more in details.'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='isKeyPortfolio' className='mb-4'>
              <Form.Label>Is this a key portfolio?</Form.Label>
              <Form.Check
                type='switch'
                value={isKeyPortfolio}
                onChange={(e) => setIsKeyPortfolio(e.target.checked)}
              />
            </Form.Group>
            <Form.Group controlId='url' className='mb-4'>
              <Form.Label>Portfolio url</Form.Label>
              <Form.Control
                type='text'
                row={10}
                placeholder='Write the external url for your blog.'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </Form.Group>

            <Button variant='primary' type='submit' className='btn btn-block'>
              Update
            </Button>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default PortfolioEditPage;
