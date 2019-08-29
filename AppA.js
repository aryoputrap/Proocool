import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Home from './src/navigator/Homenavigasi'
import ProfilScreen from './src/navigator/Profilnavigasi'


class WishlistScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Wishlist</Text>
      </View>
    );
  }
}

class ChatScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat</Text>
      </View>
    );
  }
}



const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home-outline" color={tintColor} size={25} />
        )
      }
    },
    Wishlist: {
      screen: WishlistScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="heart-outline" color={tintColor} size={25} />
        ),
        title: "Wishlist"
      }
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="message-outline" color={tintColor} size={25} />
        )
      }
    },
    Profil: {
      screen: ProfilScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="account-circle-outline" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    },
    tabBarOptions: {
      activeTintColor:  "#e67e22",
      inactiveTintColor: "grey"
    }
  }
);
export default createAppContainer(TabNavigator)
