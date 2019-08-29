import * as React from 'react';
import {  Button } from 'react-native-paper';
import { Container, Text, Thumbnail, Card, CardItem, Right} from 'native-base';
import { View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-community/async-storage';



class detailProfil extends React.Component{

  _logoutAsync = async () => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('PublicStack')
    } catch(e) {}
  };

render() {

    return (
    <ScrollView style={{backgroundColor: '#FFFF'}}>
      
      <View style={{flexDirection: 'row', alignItems: 'space-between',}}>

      <Thumbnail large source={require('./icon.png')} style={{position: 'absolute'}}/>
      <Text style={{fontWeight: 'bold', fontSize: 20, paddingLeft: 80, paddingTop: 5}}>Dumy Yumy</Text>

      <Button style={{ paddingLeft: 100}} mode="text" onPress={() => console.log('Pressed')}>
          <Text style={{fontSize: 15}}>Edit Profil</Text> </Button>

      </View>

      <Text style={{fontWeight: 'bold', fontSize: 12, paddingLeft: 80}}>Dumy Yumy@gmail.com</Text>

      <View style={styles.container}>

      <Card style={{marginTop: 50}}>
          <CardItem>
          <Text style={{fontWeight: 'bold'}}>Kost Saya</Text>
          </CardItem>
          <CardItem>
  
            <TouchableOpacity onPress={this._onPressButton}>
            <FontAwesome style={{textAlign: 'center', fontSize: 25, color: '#f1c40f'}} active name="copy">{"\n"}<Text style={{fontSize: 9}}>Kontrak</Text></FontAwesome></TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <FontAwesome style={{textAlign: 'center', marginLeft: 50, fontSize: 25, color: '#2ecc71'}} active name="dollar">{"\n"}<Text style={{fontSize: 9,}}>Tagihan</Text></FontAwesome></TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <FontAwesome style={{textAlign: 'center', marginLeft: 40, width:70, fontSize: 25, color: '#95a5a6'}} active name="wrench">{"\n"}<Text style={{fontSize: 9,}}>Komplain</Text></FontAwesome></TouchableOpacity>

            <TouchableOpacity onPress={this._onPressButton}>
            <FontAwesome style={{textAlign: 'center', marginLeft: 30, fontSize: 25, color: '#3498db'}} active name="home">{"\n"}<Text style={{fontSize: 9}}>Kios</Text></FontAwesome></TouchableOpacity>

          </CardItem>
        </Card>

 
       <TouchableOpacity onPress={this._onPressButton}>
       <Card style={{marginTop: 30}}>
         <CardItem>
           <FontAwesome active name="bookmark" style={{fontSize: 25, color: '#e74c3c'}}/>
           <Text style={{marginLeft: 10}}>History Booking</Text>
           </CardItem>
         </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this._onPressButton}>
       <Card style={{marginTop: 30}}>
         <CardItem>
           <FontAwesome active name="suitcase" style={{fontSize: 25, color: '#2c3e50'}} />
           <Text style={{marginLeft: 10}}>Barang dan Jasa</Text>
           </CardItem>
         </Card>
         </TouchableOpacity>

         <TouchableOpacity onPress={this._onPressButton}>
       <Card style={{marginTop: 30}}>
         <CardItem>
           <FontAwesome active name="user-circle-o" style={{fontSize: 25, color: '#2980b9'}} />
           <Text style={{marginLeft: 10}}>Verifikasi Akun</Text>
           </CardItem>
         </Card>
         </TouchableOpacity>

         <Card style={{marginTop: 30}}>
         <TouchableOpacity onPress={this._onPressButton}>
         <CardItem>
           <FontAwesome active name="align-right" style={{fontSize: 25, color: '#2c3e50'}}/>
           <Text style={{marginLeft: 10}}>Pengaturan</Text>
         </CardItem>
         </TouchableOpacity>


         <TouchableOpacity onPress={this._onPressButton}>
           <CardItem>
           <FontAwesome active name="phone-square"  style={{fontSize: 25, color: '#27ae60'}} />
           <Text style={{marginLeft: 10}}>Hubungi Cs</Text>
           </CardItem>
         </TouchableOpacity>


         <TouchableOpacity onPress={this._onPressButton}>
           <CardItem>
           <FontAwesome active name="file-text"  style={{fontSize: 25, color: '#bdc3c7'}}/>
           <Text style={{marginLeft: 10}}>Syarat dan Ketentuan</Text>
           </CardItem>
         </TouchableOpacity>

     
         </Card>


         <TouchableOpacity onPress={()=> this._logoutAsync()}>
       <Card style={{marginTop: 30}}>
         <CardItem>
           <FontAwesome active name="sign-out" style={{fontSize: 25, color: '#e74c3c'}}/>
           <Text style={{marginLeft: 10}}>Logout</Text>
           </CardItem>
         </Card>
         </TouchableOpacity>
        
      </View>
    </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1,
  },
  
})



export default detailProfil