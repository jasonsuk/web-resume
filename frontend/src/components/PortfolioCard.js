import React from 'react';
import { Card } from 'react-bootstrap';

const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      <Card className='card-portfolio'>
        {portfolio.image.length > 0 && (
          <div className='card-img-container'>
            <Card.Img
              className='card-portfolio-img'
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
                  {portfolio.summary.split(' ').length > 20
                    ? portfolio.summary.split(' ').slice(0, 20).join(' ') +
                      '...'
                    : portfolio.summary}
                </Card.Text>
              </div>
            </a>
          </div>
        )}
        <Card.Body className='card-portfolio'>
          <Card.Title className='card-portfolio-name'>
            {portfolio.name.split(' ').length > 10
              ? portfolio.name.split(' ').slice(0, 10).join(' ') + '...'
              : portfolio.name}
          </Card.Title>
          {/* <Card.Text className='card-portfolio-summary'>
            {portfolio.summary.split(' ').length > 20
              ? portfolio.summary.split(' ').slice(0, 20).join(' ') + '...'
              : portfolio.summary}
          </Card.Text> */}

          <hr></hr>
          <Card.Text className='card-portfolio-description'>
            {portfolio.description.split(' ').length > 60
              ? portfolio.description.split(' ').slice(0, 60).join(' ') + '...'
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
