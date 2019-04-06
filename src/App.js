import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Profile from 'src/profile/Profile';
import Map from 'src/map/Map';
import Home from 'src/home/Home';

const MainNavigator = createStackNavigator({
  Home: { screen: Home },
  Map: { screen: Map },
  Profile: { screen: Profile },
});

export default createAppContainer(MainNavigator);
