import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import { Header } from 'react-native-elements';

import LihatMap from './LihatMap';
import LihatDaftar from './LihatDaftar';
// import Searchinput from '../../component/Searchinput';
import ButtonFilter from '../../../components/btn/btn_filter'
import Headerback from '../../../components/header/header_back'


export default class List extends Component {

  // handleGoBack = () => {
  //   this.props.navigation.navigate("Home");
  // };

  render() {
    // const autoFocus = this.props.navigation.getParam("autoFocus", false);
    return (

      <Container>
      <Headerback navigation={this.props.navigation}/>
        <Tabs>
          <Tab heading={<TabHeading style={{ backgroundColor: '#e67e22' }}>
            <Icon name="home" style={{ color: '#ffff' }} />
            <Text style={{ color: '#ffff', fontWeight: 'bold' }}>Daftar Kost</Text></TabHeading>}>
            <LihatDaftar navigation={this.props.navigation} />
          </Tab>
          <Tab heading={<TabHeading style={{ backgroundColor: '#e67e22', }}>
            <Icon name="map" style={{ color: '#ffff' }} />
            <Text style={{ color: '#ffff', fontWeight: 'bold' }} >Map</Text></TabHeading>}>
            <LihatMap />
          </Tab>
        </Tabs>
        <ButtonFilter/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  Searchbar: {
    borderRadius: 20,
    width: null,
    height: 40,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: '#FFFF',
    opacity: 0.5
  },

})