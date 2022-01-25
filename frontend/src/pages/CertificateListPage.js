import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import {
  listCertificates,
  createCertificate,
  deleteCertificate,
} from '../redux/actions/certificateActions.js';
import { CERTIFICATE_CREATE_RESET } from '../redux/constants/certificateConstants.js';

const CertificateListPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const certificateList = useSelector((state) => state.certificateList);
  const { loading, error, certificates } = certificateList;

  const certificateCreate = useSelector((state) => state.certificateCreate);
  const { success: successCreate, certificate: newCertificate } =
    certificateCreate;

  const certificateDelete = useSelector((state) => state.certificateDelete);
  const { success: successDelete } = certificateDelete;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: CERTIFICATE_CREATE_RESET });
      history(`/admin/certificate/${newCertificate._id}/edit`);
    } else {
      dispatch(listCertificates());
    }
  }, [dispatch, successCreate, successDelete, history, newCertificate]);

  const createCertificateHandler = () => {
    dispatch(createCertificate());
  };

  const updateCertificateHandler = (certId) => {
    history(`/admin/certificate/${certId}/edit`);
  };

  const deleteCertificateHandler = (certId) => {
    if (window.confirm(`Deleting certficiate ${certId}. Are you sure?`)) {
      dispatch(deleteCertificate(certId));
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
          <h2>List certificate</h2>
        </Col>
        <Col style={{ textAlign: 'end' }}>
          <Button
            variant='dark'
            size='md'
            className='px-3'
            onClick={() => createCertificateHandler()}
          >
            + Create certificate
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
            <th>Completion date</th>
            <th>Name</th>
            <th>Organization</th>
            <th>Key certificate?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate._id}>
              <td>{certificate._id}</td>
              <td>{certificate.completedAt.substring(0, 10)}</td>
              <td>{certificate.name}</td>
              <td>{certificate.organization}</td>
              <td>{String(certificate.isKeyCertificate)}</td>
              <td>
                <LinkContainer
                  to={`/admin/certificate/${certificate._id}/edit`}
                >
                  <Button
                    className='btn-icon'
                    variant='warning'
                    size='md'
                    onClick={() => updateCertificateHandler(certificate._id)}
                  >
                    <i className='far fa-edit'></i>
                  </Button>
                </LinkContainer>
              </td>
              <td>
                <Button
                  className='btn-icon'
                  variant='danger'
                  size='md'
                  onClick={() => deleteCertificateHandler(certificate._id)}
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

export default CertificateListPage;
