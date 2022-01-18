import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_DETAIL_REQUEST,
  PORTFOLIO_DETAIL_SUCCESS,
  PORTFOLIO_DETAIL_FAIL,
} from '../constants/portfolioConstants.js';

export const portfolioListReducer = (state = { portfolios: [] }, action) => {
  switch (action.type) {
    case PORTFOLIO_LIST_REQUEST:
      return { loading: true, ...state };
    case PORTFOLIO_LIST_SUCCESS:
      return { loading: false, portfolios: action.payload };
    case PORTFOLIO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const portfolioDetailReducer = (state = { portfolio: {} }, action) => {
  switch (action.type) {
    case PORTFOLIO_DETAIL_REQUEST:
      return { loading: true, ...state };
    case PORTFOLIO_DETAIL_SUCCESS:
      return { loading: false, portfolio: action.payload };
    case PORTFOLIO_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
