import axios from 'axios';
import {
  CERTIFICATE_LIST_REQUEST,
  CERTIFICATE_LIST_SUCCESS,
  CERTIFICATE_LIST_FAIL,
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
        error.response && error.message.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
