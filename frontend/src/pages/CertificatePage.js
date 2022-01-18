import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../components/Banner.js';
import { Accordion, ListGroup, Badge } from 'react-bootstrap';

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
      <section className='banner-section'>
        <Banner
          subject={'Certificates'}
          body={
            'I improve. Both myself and the work that I am decidted to. It is not just a collection of papers. These certificates help me build this website and my portfolios!'
          }
        />
      </section>
      <section>
        <Accordion defaultActiveKey='0' flush>
          {certificates.map((certificate) => (
            <Accordion.Item eventKey={certificate._id} key={certificate._id}>
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
                  <ListGroup.Item className='fw-bold'>
                    {certificate.summary}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className='fw-bold'>Organization: </span>
                    {certificate.organization}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span className='fw-bold'>Completed at: </span>
                    {certificate.completedAt.substring(0, 10)}
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default CertificatePage;
