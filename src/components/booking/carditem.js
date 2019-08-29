import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {Card, CardItem, Body, Text, Container, Content} from 'native-base';
import { Button  } from 'react-native-paper';


class card extends React.Component{

render() {
    return (   
   
<CardItem style={{flexDirection: 'row', alignItems: 'space-between'}}>
  <Body>
                  
                  <View style={{flexDirection: 'row', alignItems: 'space-between', width: null, height: 115}}>
                
                <Image source={require('../screens/Profil/icon.png')}
                 style={{width: 100, height: 100, position: 'absolute', borderRadius: 10}}/>

                <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft:100,  position: 'absolute' }}>
                  PEMILIK KOST
                </Text>

                </View>

                {/* title */}
                <View style= {{flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 30,}}>

                <Text style={{ fontSize: 13, paddingLeft:100 }}>
                   Booking
                </Text>

                <Text style={{ fontSize: 13, paddingLeft:50 }}>
                   Durasi Sewa
                </Text>

                </View>
                <View style= {{flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 45}}>

                <Text style={{ fontSize: 13, paddingLeft:100 }}>
                   29 Desember
                </Text>

                <Text style={{ fontSize: 13, paddingLeft:30 }}>
                   1 bulan
                </Text>

                </View>


                <View style= {{flexDirection: 'row', alignItems: 'space-between', position: 'absolute', paddingTop: 80, paddingLeft:100 }}>
                <Button style={{backgroundColor:'#e67e22'}}>
                <Text style={{fontSize:10}}>Status Pesanan</Text>
                </Button>
                   
                </View>
          </Body>
            </CardItem>
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

export default card