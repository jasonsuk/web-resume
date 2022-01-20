import axios from 'axios';
import {
  CERTIFICATE_LIST_REQUEST,
  CERTIFICATE_LIST_SUCCESS,
  CERTIFICATE_LIST_FAIL,
  CERTIFICATE_DETAIL_REQUEST,
  CERTIFICATE_DETAIL_SUCCESS,
  CERTIFICATE_DETAIL_FAIL,
  CERTIFICATE_CREATE_REQUEST,
  CERTIFICATE_CREATE_SUCCESS,
  CERTIFICATE_CREATE_FAIL,
  CERTIFICATE_UPDATE_REQUEST,
  CERTIFICATE_UPDATE_SUCCESS,
  CERTIFICATE_UPDATE_FAIL,
  CERTIFICATE_DELETE_SUCCESS,
  CERTIFICATE_DELETE_REQUEST,
  CERTIFICATE_DELETE_FAIL,
} from '../constants/certificateConstants.js';

export const listCertificates = () => async (dispatch) => {
  try {
    dispatch({ type: CERTIFICATE_LIST_REQUEST });

    const { data } = await axios.get('/api/certificates');
    dispatch({ type: CERTIFICATE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CERTIFICATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCertificateDetail = (certId) => async (dispatch) => {
  try {
    dispatch({ type: CERTIFICATE_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/certificates/${certId}`);
    dispatch({ type: CERTIFICATE_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CERTIFICATE_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCertificate =
  (certificate) => async (dispatch, getState) => {
    try {
      dispatch({ type: CERTIFICATE_CREATE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        '/api/certificates',
        certificate,
        config
      );
      dispatch({ type: CERTIFICATE_CREATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CERTIFICATE_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const updateCertificate =
  (certificate) => async (dispatch, getState) => {
    try {
      dispatch({ type: CERTIFICATE_UPDATE_REQUEST });

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
        `/api/certificates/${certificate._id}`,
        certificate,
        config
      );
      dispatch({ type: CERTIFICATE_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CERTIFICATE_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteCertificate =
  (certificateId) => async (dispatch, getState) => {
    try {
      dispatch({ type: CERTIFICATE_DELETE_REQUEST });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      await axios.delete(`/api/certificates/${certificateId}`, config);
      dispatch({ type: CERTIFICATE_DELETE_SUCCESS });
    } catch (error) {
      dispatch({
        type: CERTIFICATE_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
