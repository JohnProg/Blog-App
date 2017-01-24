import React, { Component } from 'react';

import { Navigator } from 'react-native';

// Pages
import NewsPage from './pages/NewsPage';

const AppContainer = () =>
    <Navigator
      initialRoute={{ component: NewsPage }}
      configureScene={ () => Navigator.SceneConfigs.PushFromRight }
      renderScene={ (route, navigator) => {
        let Component = route.component;

        return React.createElement(Component, { ...route.passProps, navigator } )
      } } />

export default AppContainer;
