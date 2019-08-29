import React, { Component } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { Header, Left, Icon,Text, Body, Right, Button, Content, Container } from 'native-base';
import { IconButton, Colors } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';


class header extends Component {

  render() {
    return (

      <View>
      <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>
        <Header style={{ backgroundColor: "#e67e22" }}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Text style={{
              color: "white", flex: 1,
              textAlign: 'justify', marginLeft: 50, marginTop: 17,
              fontWeight: 'bold', alignContent: 'space-between'
            }}>
              SKUT-KOST
                    </Text>
          </Body>
        </Header>
      </View>
    );
  }
}

export default header;

const styles = StyleSheet.create({
  container: {},
  luasTitle: {},
  luasContainer: {
    padding: 20,
    paddingBottom: 0
  },
  pemilikIcon: {
    color: "white",
    marginLeft: 10,
    marginRight: 20
  },
  pemilik: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  nomorHp: {
    color: "#e67e22"
  }
});

