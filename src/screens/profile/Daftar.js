import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Text,  Button, } from 'react-native-paper';

import axios from 'axios';

class Daftar extends React.Component{

  state = {
    name : '',
    email : '',
    username : '',
    password : '',
    telp : '',
  }

  _prosesRegis = () => {
    this._prosesRegisAsync();
  }

  _prosesRegisAsync = async () => {
    try{
      // validasi data
      let tempUser = {
        name : this.state.name,
        email : this.state.email,
        username: this.state.username,
        password: this.state.password,
        telp: this.state.telp
      }

      await axios.post("http://skut-kost-api.herokuapp.com/api/v1/register",tempUser)
      .then((response) => {
        this.props.navigation.navigate('PublicNav')
      })
      .catch((error) => {
        alert(error) 
      });
    }
    catch (error) {
      console.log(error)
    }
  }

    render() {
  
        return (
            
            <ScrollView style={{backgroundColor: '#e67e22'}}>

            <View style={styles.container}>

            <View style={styles.logoContainer}><Image style={styles.logo}
            source={require('./icon.png')}/>

                <View style={styles.loginitem}>
                    <Text style={styles.title}>Daftar</Text>

                    <Text style={{fontSize:15, textAlign: 'center', marginBottom: 20, color: '#FFF'}}>Daftar Aja Dulu Kali Ada Yang Cocok</Text>
                    
                    <TextInput placeholder="Nama" placeholderTextColor="rgba(255,255,255,0.9)" 
                    style={styles.input} onChangeText={(name) => this.setState({ name })} />

                    <TextInput placeholder="Username" placeholderTextColor="rgba(255,255,255,0.9)" 
                    style={styles.input} onChangeText={(username) => this.setState({ username })} />
                    
                    <TextInput placeholder="Email" placeholderTextColor="rgba(255,255,255,0.9)" 
                    style={styles.input} onChangeText={(email) => this.setState({ email })} keyboardType= 'email'/>

                    <TextInput placeholder="Password" placeholderTextColor="rgba(255,255,255,0.9)"
                    secureTextEntry
                    style={styles.input} onChangeText={(password) => this.setState({ password })} />

                    <TextInput placeholder="No Telp" placeholderTextColor="rgba(255,255,255,0.9)"
                    style={styles.input} onChangeText={(telp) => this.setState({ telp })} keyboardType= 'numeric'/>

                    <Button style={styles.button} mode="contained" 
                     onPress={this._prosesRegis}>
                        <Text style={styles.title2}>Daftar</Text>
                    </Button>
                </View>

            </View>

                </View>
            </ScrollView>
        )

}

}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flex: 1,
      marginBottom: 20
    },

    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
    },

    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#FFF',
      textAlign: 'center',
      marginBottom: 40,
    },

    input: {
        height: 40,
        backgroundColor: 'rgba(0,0,0,0.4)',
        marginBottom: 15,
        color: '#FFFFFF',
        borderRadius: 20,
        textAlign: 'center',
        width: 330
    },
   
    logo: {
      justifyContent: 'center',
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#16a085',
    },

    title2: {
      fontWeight: 'bold',
      color: '#FFF',
    }
})

export default Daftar