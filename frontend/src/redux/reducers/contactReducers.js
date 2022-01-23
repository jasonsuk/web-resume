import {
  CONTACT_MAKE_REQUEST,
  CONTACT_MAKE_SUCCESS,
  CONTACT_MAKE_FAIL,
  CONTACT_MAKE_RESET,
  CONTACT_ARCHIVE_REQUEST,
  CONTACT_ARCHIVE_SUCCESS,
  CONTACT_ARCHIVE_FAIL,
  CONTACT_ARCHIVE_RESET,
} from '../constants/contactConstants.js';

export const contactMakeReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_MAKE_REQUEST:
      return { loading: true, ...state };
    case CONTACT_MAKE_SUCCESS:
      return { loading: false, success: true, contact: action.payload };
    case CONTACT_MAKE_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_MAKE_RESET:
      return {};
    default:
      return state;
  }
};

export const contactArchiveReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_ARCHIVE_REQUEST:
      return { loading: true, ...state };
    case CONTACT_ARCHIVE_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_ARCHIVE_FAIL:
      return { loading: false, error: action.payload };
    case CONTACT_ARCHIVE_RESET:
      return {};
    default:
      return state;
  }
};
