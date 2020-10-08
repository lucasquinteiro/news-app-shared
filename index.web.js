import React from 'react';
import ReactDOM from 'react-dom';

import ReduxContainer from './app/redux';
import Home from './app/components/home';

const App = () => (
  <ReduxContainer>
    <Home />
  </ReduxContainer>
);

ReactDOM.render(<App />, document.getElementById('root'));
