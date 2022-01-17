import React from 'react';
import Banner from '../components/Banner.js';
import CertAccordion from '../components/CertAccordion.js';
import { Row, Col, ListGroup, Badge } from 'react-bootstrap';

const CertificatePage = () => {
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
      <Row>
        <Col md={6}>
          <CertAccordion />
        </Col>
        <Col>
          <ListGroup variant='flush'>
            <ListGroup.Item
              as='li'
              className='d-flex justify-content-between align-items-start'
            >
              <div className='ms-2 me-auto'>
                <div className='fw-bold'>Organization</div>
                Related skills
              </div>
              <Badge variant='primary' pill>
                Completed at
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in
              massa egestas mollis varius; dignissim elementum. Mollis tincidunt
              mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit
              parturient habitant pharetra rutrum gravida porttitor eros
              feugiat. Mollis elit sodales taciti duis praesent id. Consequat
              urna vitae morbi nunc congue.
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default CertificatePage;
