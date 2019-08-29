import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, StatusBar} from "react-native";
import { Text, Appbar,Button  } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

export default class btn_ads extends Component {

  componentDidMount(){
    this._cekLogin();
  }
  _cekLogin = async () => {
    const fetchDataMentah = await AsyncStorage.getItem('userToken');
    if (fetchDataMentah) {
      this.setState({
        udahLogin:true
      })
    }else{
      this.setState({
        udahLogin:false
      })
    }
  }
    render() {
     
      return (

                <Button
                        onPress={()=>{
                          if(this.state.udahLogin){
                            this.props.navigation.navigate('FormPrivate')
                          }else{
                            this.props.navigation.navigate('LoginPublic')
                         } 
                        }}
                        style={styles.button} mode="contained" >
                        <Text style={{color: 'white', fontWeight:'bold'}}> Pasang Iklan </Text> 
                </Button>
      )
    }
}

const styles = StyleSheet.create({
    container: {
    padding: 15,
    },
    tag : {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: 'bold',
    paddingVertical: 10,
    color: '#16a085'
    },
    tagx: {
      marginTop: 20,
      fontSize: 15,
      marginLeft: 15,
  
      fontWeight: 'bold',
      color: '#16a085'
    },
    
    button: {
      borderRadius: 10,
      width: 155,
      marginTop: 10,
      backgroundColor: '#e67e22',
      marginHorizontal: 20,
      },
    });