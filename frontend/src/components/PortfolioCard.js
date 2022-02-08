import React from 'react';
import { Card } from 'react-bootstrap';

const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      <Card className='card-portfolio'>
        {portfolio.image.length > 0 && (
          <div className='card-img-container'>
            <Card.Img
              className='card-img-portfolio'
              src={portfolio.image}
              alt={portfolio.name}
            />
            <a
              href={portfolio.url}
              target='_blank'
              alt={portfolio.name}
              rel='noopener noreferrer'
            >
              <div className='card-img-overlay'>
                <Card.Text className='card-img-text'>
                  {portfolio.name}
                </Card.Text>
              </div>
            </a>
          </div>
        )}
        <Card.Body>
          <Card.Title as='h3' style={{ minHeight: '4.2rem' }}>
            {portfolio.name.length > 50
              ? portfolio.name.substring(0, 50) + '...'
              : portfolio.name}
          </Card.Title>
          <Card.Text as='h5'>
            {portfolio.summary.length > 80
              ? portfolio.summary.substring(0, 80) + '...'
              : portfolio.summary}
          </Card.Text>

          <hr></hr>
          <Card.Text style={{ fontSize: '1rem' }}>
            {portfolio.description.length > 150
              ? portfolio.description.substring(0, 150) + '...'
              : portfolio.description}
          </Card.Text>
        </Card.Body>
        {/* <Button
          variant='dark'
          href={portfolio.url}
          style={{ width: '95%', margin: '0 auto 1.2rem', color: 'white' }}
          target='_blank'
          rel='noopener noreferrer'
        >
          Explore details
        </Button> */}
      </Card>
    </>
  );
};

export default PortfolioCard;
