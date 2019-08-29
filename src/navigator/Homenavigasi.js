import React from 'react';
import { createStackNavigator} from "react-navigation";

import Home from '../screens/home/home'
import Form from '../screens/home/form'
import List from '../screens/home/list/List'
import KostDetail from '../screens/home/Detailkosan/HomeKostdetail'
import Kalender from '../screens/home/BookingDetail/BookingCalender'
import Booking from '../screens/home/BookingDetail/Booking'
import ListBooking from '../screens/home/BookingDetail/listBooking'

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Form : {
      screen: Form,
      navigationOptions: {
        header: null
      }
    },
    List: {
      screen: List,
      navigationOptions: {
        header: null
      }
    },
    KostDetail: {
      screen: KostDetail,
      navigationOptions: {
        header: null
      }
    },
    Booking:{
      screen: Booking,
      navigationOptions:{
        header: null
      }
    },
    Kalender:{
      screen: Kalender,
      navigationOptions:{
        header: null
      }
    },
    ListBooking:{
      screen: ListBooking,
      navigationOptions:{
        header: null
      }
    },
  //   Iklan: {
  //     screen: Iklan
  //   },
  //   BookingList: {
  //     screen: BookingList
  //   }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0
      },
      headerTintColor: "#2980b9"
    }
  }
);

HomeNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

export default HomeNavigator;