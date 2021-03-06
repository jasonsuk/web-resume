import asyncHandler from 'express-async-handler';
import Portfolio from '../models/portfolioModel.js';

// DESC: Get all portfolios
// ROUTE: GET /api/portfolios
// ACCESS: Public

export const getPortfolios = asyncHandler(async (req, res) => {
  const portfolios = await Portfolio.find({}).sort({ createdAt: -1 });
  res.status(200).json(portfolios);
});

// DESC: Get a portfolio
// ROUTE: GET /api/portfolio/:id
// ACCESS: Public

export const getPortfolio = asyncHandler(async (req, res) => {
  const portfolioId = req.params.id;
  const portfolio = await Portfolio.findById(portfolioId);

  if (portfolio) {
    res.status(200).json(portfolio);
  } else {
    res.status(400);
    throw new Error(`Portfolio ${portfolioId} not found`);
  }
});

// DESC: Add a portfolio
// ROUTE: POST /api/portfolios/
// ACCESS: Private

export const addPortfolio = asyncHandler(async (req, res) => {
  // const userId = req.user._id;

  const newPortfolio = await new Portfolio({
    name: 'Portfolio - new',
    summary: 'Summary for a new portfolio',
    description: 'Description for a new portfolio',
    image: '/uploads/image-sample-portfolio.jpg',
    completedAt: Date.now(),
    isKeyPortfolio: false,
    url: 'https://github.com/jasonsuk', // github main page as a default
  });

  const createdPortfolio = await newPortfolio.save();
  res.status(200).json(createdPortfolio);
});

// DESC: Update a portfolio
// ROUTE: PUT /api/portfolios/:id
// ACCESS: Private

export const updatePortfolio = asyncHandler(async (req, res) => {
  const portfolioId = req.params.id;
  const portfolio = await Portfolio.findById(portfolioId);

  if (portfolio) {
    const {
      name,
      summary,
      description,
      image,
      completedAt,
      isKeyPortfolio,
      url,
    } = req.body;

    portfolio.name = name || portfolio.name;
    portfolio.summary = summary || portfolio.summary;
    portfolio.description = description || portfolio.description;
    portfolio.image = image || portfolio.image;
    portfolio.completedAt = completedAt || portfolio.completedAt;
    portfolio.isKeyPortfolio = isKeyPortfolio || portfolio.isKeyPortfolio;
    portfolio.url = url || portfolio.url;

    const updatedPortfolio = await portfolio.save();
    res.status(200).json(updatedPortfolio);
  }
});

// DESC: Delete a portfolio
// ROUTE: DELETE /api/portfolios/:id
// ACCESS: Private

export const deletePortfolio = asyncHandler(async (req, res) => {
  const portfolioId = req.params.id;
  const portfolio = await Portfolio.findById(portfolioId);

  if (portfolio) {
    await portfolio.remove();
    res.json({
      message: `Successfully deleted the portfolio ${portfolioId}`,
    });
  } else {
    res.status(400);
    throw new Error(`portfolio ${portfolioId} not found.`);
  }
});
