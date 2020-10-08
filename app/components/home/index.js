import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../redux/actions/news';
import HomeView from './homeView';

const Container = ({getNews, ...props}) => {
  useEffect(() => {
    getNews();
  }, []);

  return <HomeView {...props} />;
};

const props = ({news}) => ({
  news: news.newsList,
  loading: news.loading,
});

const actionsDispatched = (dispatch) => ({
  getNews: () => dispatch(actions.getLatestNews()),
});

export default connect(props, actionsDispatched)(Container);
