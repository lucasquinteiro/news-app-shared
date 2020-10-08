import React from 'react';
import {AppRegistry} from 'react-native';

import ReduxContainer from './app/redux';
import Home from './app/components/home';
import {name as appName} from './app.json';

const App = () => (
  <ReduxContainer>
    <Home />
  </ReduxContainer>
);

AppRegistry.registerComponent(appName, () => App);
