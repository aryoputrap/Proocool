import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import PrivateStack from './src/navigator/switch/PrivateStack';
import PublicStack from './src/navigator/switch/PublicStack';
import RouteSwitch from './src/navigator/switch/RouteSwitch';

import {Provider} from 'react-redux'
import Store from './src/redux/_redux/Store'

const TabNavigator = createSwitchNavigator(
  {
    PublicStack: PublicStack,
    PrivateStack: PrivateStack,
    RouteSwitch: RouteSwitch
  },
  {headerMode:'none',
  initialRouteName: 'RouteSwitch'}
);
const TabContainer = createAppContainer(TabNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <TabContainer />
      </Provider>
    )
  }
}

export default App;