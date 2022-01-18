import {
  CERTIFICATE_LIST_REQUEST,
  CERTIFICATE_LIST_SUCCESS,
  CERTIFICATE_LIST_FAIL,
} from '../constants/certificateConstants.js';

export const certificateListReducer = (
  state = { certificates: [] },
  action
) => {
  switch (action.type) {
    case CERTIFICATE_LIST_REQUEST:
      return { loading: true, ...state };
    case CERTIFICATE_LIST_SUCCESS:
      return { loading: false, certificates: action.payload };
    case CERTIFICATE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
