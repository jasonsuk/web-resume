import {
  CONTACT_MAKE_REQUEST,
  CONTACT_MAKE_SUCCESS,
  CONTACT_MAKE_FAIL,
  CONTACT_MAKE_RESET,
  CONTACT_ARCHIVE_REQUEST,
  CONTACT_ARCHIVE_SUCCESS,
  CONTACT_ARCHIVE_FAIL,
  CONTACT_ARCHIVE_RESET,
  CONTACT_LIST_REQUEST,
  CONTACT_LIST_SUCCESS,
  CONTACT_LIST_FAIL,
  CONTACT_DELETE_REQUEST,
  CONTACT_DELETE_SUCCESS,
  CONTACT_DELETE_FAIL,
} from '../constants/contactConstants.js';

export const contactMakeReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_MAKE_REQUEST:
      return { loading: true, ...state };
    case CONTACT_MAKE_SUCCESS:
      return { loading: false, success: true };
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

export const contactListReducer = (state = { contacts: [] }, action) => {
  switch (action.type) {
    case CONTACT_LIST_REQUEST:
      return { loading: true, ...state };
    case CONTACT_LIST_SUCCESS:
      return { loading: false, contacts: action.payload };
    case CONTACT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const contactDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case CONTACT_DELETE_REQUEST:
      return { loading: true, ...state };
    case CONTACT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case CONTACT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
