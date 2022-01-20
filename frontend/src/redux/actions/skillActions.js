import axios from 'axios';
import {
  SKILL_LIST_REQUEST,
  SKILL_LIST_SUCCESS,
  SKILL_LIST_FAIL,
  SKILL_DETAIL_REQUEST,
  SKILL_DETAIL_SUCCESS,
  SKILL_DETAIL_FAIL,
  SKILL_CREATE_REQUEST,
  SKILL_CREATE_SUCCESS,
  SKILL_CREATE_FAIL,
  SKILL_UPDATE_REQUEST,
  SKILL_UPDATE_SUCCESS,
  SKILL_UPDATE_FAIL,
  SKILL_DELETE_REQUEST,
  SKILL_DELETE_SUCCESS,
  SKILL_DELETE_FAIL,
} from '../constants/skillConstants.js';

export const listSkills = () => async (dispatch) => {
  try {
    dispatch({ type: SKILL_LIST_REQUEST });

    const { data } = await axios.get('/api/skills');
    dispatch({ type: SKILL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SKILL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listSkillDetail = (skillId) => async (dispatch) => {
  try {
    dispatch({ type: SKILL_DETAIL_REQUEST });

    const { data } = await axios.get(`/api/skills/${skillId}`);
    dispatch({ type: SKILL_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SKILL_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createSkill = () => async (dispatch, getState) => {
  try {
    dispatch({ type: SKILL_CREATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post('/api/skills', {}, config);
    dispatch({ type: SKILL_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SKILL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSkill = (skill) => async (dispatch, getState) => {
  try {
    dispatch({ type: SKILL_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/skills/${skill._id}`, skill, config);
    dispatch({ type: SKILL_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: SKILL_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSkill = (skillId) => async (dispatch, getState) => {
  try {
    dispatch({ type: SKILL_DELETE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/skills/${skillId}`, config);
    dispatch({ type: SKILL_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: SKILL_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
