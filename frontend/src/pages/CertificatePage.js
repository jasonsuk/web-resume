import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Accordion, ListGroup } from 'react-bootstrap';
import Banner from '../components/Banner.js';
import Loader from '../components/Loader.js';
import Message from '../components/Message.js';

import { listCertificates } from '../redux/actions/certificateActions.js';

const CertificatePage = () => {
  const dispatch = useDispatch();

  const certificateList = useSelector((state) => state.certificateList);
  const { loading, error, certificates } = certificateList;

  useEffect(() => {
    dispatch(listCertificates());
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
              subject={'Certificates'}
              body={
                'I improve. Both myself and the work that I am decidted to. It is not just a collection of papers. These certificates help me build this website and my portfolios!'
              }
            />
            <Accordion defaultActiveKey='0' flush>
              {certificates.map((certificate) => (
                <Accordion.Item
                  eventKey={certificate._id}
                  key={certificate._id}
                >
                  <Accordion.Header>
                    {certificate.name}
                    {/* {certificate.isKeyCertificate && (
                  <Badge className='badge-custom' pill bg='secondary'>
                    Core
                  </Badge>
                )} */}
                  </Accordion.Header>
                  <Accordion.Body>
                    <ListGroup variant='flush'>
                      <ListGroup.Item>{certificate.summary}</ListGroup.Item>
                      <ListGroup.Item>
                        <span>Organization: </span>
                        {certificate.organization}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <span>Completed at: </span>
                        {certificate.completedAt.substring(0, 10)}
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </section>
      )}
    </>
  );
};

export default CertificatePage;
