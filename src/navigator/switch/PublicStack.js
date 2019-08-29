import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from '../../screens/home/home'
import Form from '../../screens/home/form'
import List from '../../screens/home/list/List'
import Kota from '../../components/ads/ads_city'
import KostDetail from '../../screens/home/Detailkosan/HomeKostdetail'

//Navigasi
import PublicNav from '../../navigator/switch/PublicNav'
import Profil from '../../screens/profile/Profil'
import Register from '../../screens/profile/Daftar'
import Login from '../../screens/profile/Login'
import Booking from '../../screens/home/BookingDetail/Booking'



const PublicStack = createStackNavigator(
  {
    PublicNav: PublicNav,
    Profil: Profil,
    Register: Register,
    LoginPublic: Login,
    BookingPublic: Booking,

    Home: Home,
    List: List,
    Kota:Kota,
    Form: Form,
    KostDetail: KostDetail,
  }, {
    initialRouteName: "PublicNav",
    headerMode: 'none'
  });

// class PublicStack extends Component {
//   render() {
//     return (
//       <ContainerPublic />
//     );
//   }
// }
export default PublicStack;