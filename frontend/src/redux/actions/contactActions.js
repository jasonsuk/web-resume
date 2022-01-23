import axios from 'axios';
import {
  CONTACT_MAKE_REQUEST,
  CONTACT_MAKE_SUCCESS,
  CONTACT_MAKE_FAIL,
  CONTACT_ARCHIVE_REQUEST,
  CONTACT_ARCHIVE_SUCCESS,
  CONTACT_ARCHIVE_FAIL,
} from '../constants/contactConstants.js';

export const makeContact = (contact) => async (dispatch) => {
  try {
    dispatch({ type: CONTACT_MAKE_REQUEST });

    const { data } = await axios.post('/api/contacts/', contact);

    console.log(data);

    dispatch({ type: CONTACT_MAKE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTACT_MAKE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const archiveContact = (contactId) => async (dispatch, getState) => {
  try {
    dispatch({ type: CONTACT_ARCHIVE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.patch(
      `/api/contacts/${contactId}`,
      {},
      config
    );
    dispatch({ type: CONTACT_ARCHIVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CONTACT_ARCHIVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
