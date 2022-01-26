import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  portfolioListReducer,
  portfolioDetailReducer,
  portfolioCreateReducer,
  portfolioUpdateReducer,
  portfolioDeleteReducer,
} from './reducers/portfolioReducers.js';

import {
  blogListReducer,
  blogDetailReducer,
  blogCreateReducer,
  blogUpdateReducer,
  blogDeleteReducer,
} from './reducers/blogReducers.js';

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

import {
  contactMakeReducer,
  contactArchiveReducer,
  contactListReducer,
  contactDeleteReducer,
} from './reducers/contactReducers.js';

const reducer = combineReducers({
  portfolioList: portfolioListReducer,
  portfolioDetail: portfolioDetailReducer,
  portfolioCreate: portfolioCreateReducer,
  portfolioUpdate: portfolioUpdateReducer,
  portfolioDelete: portfolioDeleteReducer,
  blogList: blogListReducer,
  blogDetail: blogDetailReducer,
  blogCreate: blogCreateReducer,
  blogUpdate: blogUpdateReducer,
  blogDelete: blogDeleteReducer,
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
  contactMake: contactMakeReducer,
  contactArchive: contactArchiveReducer,
  contactList: contactListReducer,
  contactDelete: contactDeleteReducer,
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
