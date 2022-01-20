import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  portfolioListReducer,
  portfolioDetailReducer,
} from './reducers/portfolioReducers.js';

import {
  certificateListReducer,
  certificateDetailReducer,
  certificateCreateReducer,
  certificateUpdateReducer,
  certificateDeleteReducer,
} from './reducers/certificateReducers.js';

import {
  skillListReducer,
  skillDetailReducer,
  skillCreateReducer,
  skillUpdateReducer,
  skillDeleteReducer,
} from './reducers/skillReducers.js';

import { userLoginReducer } from './reducers/userReducers.js';

const reducer = combineReducers({
  portfolioList: portfolioListReducer,
  portfolioDetail: portfolioDetailReducer,
  certificateList: certificateListReducer,
  certificateDetail: certificateDetailReducer,
  certificateCreate: certificateCreateReducer,
  certificateUpdate: certificateUpdateReducer,
  certificateDelete: certificateDeleteReducer,
  skillList: skillListReducer,
  skillDetail: skillDetailReducer,
  skillCreate: skillCreateReducer,
  skillUpdate: skillUpdateReducer,
  skillDelete: skillDeleteReducer,
  userLogin: userLoginReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
