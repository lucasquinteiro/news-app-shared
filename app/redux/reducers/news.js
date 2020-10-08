import {news as actionTypes} from '../actionTypes';

const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

const newsReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case actionTypes.GET_LATEST_NEWS_PENDING:
      return {...state, loading: true, error: false};
    case actionTypes.GET_LATEST_NEWS_FULFILLED:
      return {...state, loading: false, newsList: payload, error: false};
    case actionTypes.GET_LATEST_NEWS_REJECTED:
      return {...state, loading: false, newsList: payload, error: true};
    default:
      return {...state};
  }
};

export default newsReducer;
