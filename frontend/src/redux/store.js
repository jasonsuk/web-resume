import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  portfolioListReducer,
  portfolioDetailReducer,
} from './reducers/portfolioReducers.js';

import { certificateListReducer } from './reducers/certificateReducers.js';

import { skillListReducer } from './reducers/skillReducers.js';

// import { userLoginReducer } from './reducers/userReducers.js';

const reducer = combineReducers({
  portfolioList: portfolioListReducer,
  portfolioDetail: portfolioDetailReducer,
  certificateList: certificateListReducer,
  skillList: skillListReducer,
  // userLogin: userLoginReducer,
});

// const userInfoFromStorage = localStorage.getItem('userInfo')
//   ? JSON.parse(localStorage.getItem('userInfo'))
//   : null;

// const initialState = { userLogin: { userInfo: userInfoFromStorage } };
const initialState = {};
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
