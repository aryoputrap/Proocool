import React from 'react';
import { createStackNavigator,createAppContainer } from "react-navigation";

import Home from '../../screens/home/home'
import Form from '../../screens/home/form'
import List from '../../screens/home/list/List'
import Kota from '../../components/ads/ads_city'
import KostDetail from '../../screens/home/Detailkosan/HomeKostdetail'
import Kalender from '../../screens/home/BookingDetail/BookingCalender'
import Booking from '../../screens/home/BookingDetail/Booking'
import ListBooking from '../../screens/home/BookingDetail/listBooking'
// import Profil from '../../screens/profile/Profil'
import PrivateNav from '../switch/PrivateNav'
import Login from '../../screens/profile/Login';
//Navigasi
// import PublicNav from '../../navigator/switch/PublicNav'
// import Profil from '../screens/Profil/Profil'
// import Register from '../../screens/profile/Daftar'


const PrivateStack = createStackNavigator(
  {
    //Route
    PrivateNav: PrivateNav,
    HomePrivateStack:Home,
    FormPrivate:Form,
    ListPrivateStack:List,
    KotaPrivateStack:Kota,
    KostDetail:KostDetail,
    KalenderPrivateStack:Kalender,
    BookingPrivateStack:Booking,
    ListBookingPrivateStack:ListBooking,
    // ProfilPrivateStack:Profil,
    LoginPrivateStack:Login,
    RegisterPrivateStack:Register,

  },
  {
    initialRouteName: "PrivateNav",
    headerMode: 'none'
  }
);

export default PrivateStack;