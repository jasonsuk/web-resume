import axios from 'axios';
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
  PORTFOLIO_UPDATE_REQUEST,
  PORTFOLIO_UPDATE_SUCCESS,
  PORTFOLIO_UPDATE_FAIL,
  PORTFOLIO_DELETE_REQUEST,
  PORTFOLIO_DELETE_SUCCESS,
  PORTFOLIO_DELETE_FAIL,
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
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPortfolio = () => async (dispatch, getState) => {
  try {
    dispatch({ type: PORTFOLIO_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/portfolios', {}, config);
    dispatch({ type: PORTFOLIO_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePortfolio = (portfolio) => async (dispatch, getState) => {
  try {
    dispatch({ type: PORTFOLIO_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/portfolios/${portfolio._id}`,
      portfolio,
      config
    );
    dispatch({ type: PORTFOLIO_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePortfolio = (portfolioId) => async (dispatch, getState) => {
  try {
    dispatch({ type: PORTFOLIO_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/portfolios/${portfolioId}`, config);
    dispatch({ type: PORTFOLIO_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
