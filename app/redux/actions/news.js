import {news as actionTypes} from '../actionTypes';
import api from '../api';

export const getLatestNews = () => ({
  type: actionTypes.GET_LATEST_NEWS,
  payload: api.news.getLatestNews(),
});
