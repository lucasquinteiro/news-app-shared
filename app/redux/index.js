import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import promiseMiddleware from "redux-promise-middleware";

import reducers from './reducers'

const middleware = [
  promiseMiddleware
];

const store = createStore(reducers, {}, applyMiddleware(...middleware));

const ReduxContainer = ({ children }) => <Provider store={store}>{children}</Provider>;
  
export default ReduxContainer;
