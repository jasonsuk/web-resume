import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormContainer.js';
import { Form, Button } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listCertificateDetail,
  updateCertificate,
} from '../redux/actions/certificateActions.js';

import { CERTIFICATE_UPDATE_RESET } from '../redux/constants/certificateConstants.js';

const CertificateEditPage = () => {
  const { id } = useParams();
  const history = useNavigate();
  const dispatch = useDispatch();

  const certificateDetail = useSelector((state) => state.certificateDetail);
  const { loading, error, certificate } = certificateDetail;

  const certificateUpdate = useSelector((state) => state.certificateUpdate);
  const { success: successUpdate } = certificateUpdate;

  // Inputs from form control
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [summary, setSummary] = useState('');
  const [completedAt, setCompletedAt] = useState(new Date());
  const [isKeyCertificate, setIsKeyCertificate] = useState(false);

  useEffect(() => {
    if (successUpdate) {
      history('/admin/certificate');
      dispatch({ type: CERTIFICATE_UPDATE_RESET });
    } else {
      if (!certificate || certificate._id !== id) {
        dispatch(listCertificateDetail(id));
      } else {
        setName(certificate.name);
        setOrganization(certificate.organization);
        setSummary(certificate.summary);
        setCompletedAt(certificate.completedAt);
        setIsKeyCertificate(certificate.isKeyCertificate);
      }
    }
  }, [dispatch, history, successUpdate, certificate, id]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateCertificate({
        _id: id,
        name,
        summary,
        organization,
        completedAt,
        isKeyCertificate,
      })
    );
  };

  console.log(completedAt);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='warning'>{error}</Message>
      ) : (
        <FormContainer>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name' className='mb-4'>
              <Form.Label>Certificate name</Form.Label>
              <Form.Control
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='organization' className='mb-4'>
              <Form.Label>Issuing organization</Form.Label>
              <Form.Control
                type='text'
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='summary' className='mb-4'>
              <Form.Label>Certificate summary</Form.Label>
              <Form.Control
                type='textarea'
                rows={10}
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId='createdAt' className='mb-4'>
              <Form.Label>Completed at</Form.Label>
              <DatePicker
                className='datepicker'
                value={
                  typeof completedAt === 'string'
                    ? new Date(completedAt)
                    : completedAt
                }
                onChange={(date) => setCompletedAt(date.toISOString())}
              />
            </Form.Group>
            <Form.Group controlId='isKeyCertificate' className='mb-4'>
              <Form.Label>Is key certificate?</Form.Label>
              <Form.Check
                type='switch'
                value={isKeyCertificate}
                onChange={(e) => setIsKeyCertificate(e.target.checked)}
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

export default CertificateEditPage;
