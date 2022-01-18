import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  portfolioListReducer,
  portfolioDetailReducer,
} from './reducers/portfolioReducers.js';

const reducer = combineReducers({
  portfolioList: portfolioListReducer,
  portfolioDetail: portfolioDetailReducer,
});
const initialState = {};
const middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
