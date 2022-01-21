import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_DETAIL_REQUEST,
  PORTFOLIO_DETAIL_SUCCESS,
  PORTFOLIO_DETAIL_FAIL,
  PORTFOLIO_CREATE_REQUEST,
  PORTFOLIO_CREATE_SUCCESS,
  PORTFOLIO_CREATE_FAIL,
  PORTFOLIO_CREATE_RESET,
  PORTFOLIO_UPDATE_REQUEST,
  PORTFOLIO_UPDATE_SUCCESS,
  PORTFOLIO_UPDATE_FAIL,
  PORTFOLIO_UPDATE_RESET,
  PORTFOLIO_DELETE_REQUEST,
  PORTFOLIO_DELETE_SUCCESS,
  PORTFOLIO_DELETE_FAIL,
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

export const portfolioDetailReducer = (state = {}, action) => {
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

export const portfolioCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PORTFOLIO_CREATE_REQUEST:
      return { loading: true, ...state };
    case PORTFOLIO_CREATE_SUCCESS:
      return { loading: false, success: true, portfolio: action.payload };
    case PORTFOLIO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PORTFOLIO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const portfolioUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PORTFOLIO_UPDATE_REQUEST:
      return { loading: true, ...state };
    case PORTFOLIO_UPDATE_SUCCESS:
      return { loading: false, success: true, portfolio: action.payload };
    case PORTFOLIO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PORTFOLIO_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const portfolioDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PORTFOLIO_DELETE_REQUEST:
      return { loading: true, ...state };
    case PORTFOLIO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PORTFOLIO_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
