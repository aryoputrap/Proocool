import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Card, CardItem, Body, Text, Container, Content } from 'native-base';
import { Button } from 'react-native-paper';

import BackHome from '../../../components/global/back'
// import CardItem from '../../../components/booking/carditem'


class listBooking extends React.Component {

  handleGoBack = () => {
    this.props.navigation.navigate("Home");
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: '#FFF' }}>


        <Card>

        </Card>
        <View style={styles.container}>
          <Card style={styles.card}>
            <CardItem style={{ flexDirection: 'row', alignItems: 'space-between' }}>
              <Body>

                <View style={{ flexDirection: 'row', alignItems: 'space-between', width: null, height: 115 }}>

                  <Image source={require('../../profile/icon.png')}
                    style={{ width: 100, height: 100, position: 'absolute', borderRadius: 10 }} />

                  <Text style={{ fontWeight: 'bold', fontSize: 20, paddingLeft: 100, position: 'absolute' }}>
                    PEMILIK KOST
                </Text>

                </View>

                {/* title */}
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 30, }}>

                  <Text style={{ fontSize: 13, paddingLeft: 100 }}>
                    Booking
                </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 50 }}>
                    Durasi Sewa
                </Text>

                </View>

                {/* isi */}
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 45 }}>

                  <Text style={{ fontSize: 13, paddingLeft: 100 }}>
                    29 Desember
                </Text>

                  <Text style={{ fontSize: 13, paddingLeft: 30 }}>
                    1 bulan
                </Text>

                </View>
                <View style={{ flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 80, paddingLeft: 100 }}>
                  <Button style={{ backgroundColor: '#e67e22' }}>
                    <Text style={{ fontSize: 10 }}>Status Pesanan</Text>
                  </Button>
                  <BackHome />
                </View>
              </Body>
            </CardItem>
          </Card>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  card: {
    marginTop: 20
  },

  container: {
    padding: 15,
    flex: 1
  },
  Button: {
    width: 100,
    height: 40,
    backgroundColor: 'white',

  },
})

export default listBooking