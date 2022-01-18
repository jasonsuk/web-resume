import axios from 'axios';
import {
  PORTFOLIO_LIST_REQUEST,
  PORTFOLIO_LIST_SUCCESS,
  PORTFOLIO_LIST_FAIL,
  PORTFOLIO_DETAIL_REQUEST,
  PORTFOLIO_DETAIL_SUCCESS,
  PORTFOLIO_DETAIL_FAIL,
} from '../constants/portfolioConstants.js';

export const listPortfolios = () => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_LIST_REQUEST });

    const { data } = await axios.get('/api/portfolios');
    dispatch({ type: PORTFOLIO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPortfolioDetail = (portfolioId) => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/portfolios/${portfolioId}`);
    dispatch({ type: PORTFOLIO_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_DETAIL_FAIL,
      payload:
        error.response && error.message.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
