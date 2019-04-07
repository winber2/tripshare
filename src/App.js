import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from 'src/profile/Profile';
import Home from 'src/home/Home';
import Map from 'src/map/Map';

const MainNavigator = createStackNavigator(
  {
    Map: { screen: Map },
    Home: { screen: Home },
    Profile: { screen: Profile },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(MainNavigator);
