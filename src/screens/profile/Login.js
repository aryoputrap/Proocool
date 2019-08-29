import * as React from 'react';
import { View, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { Text, Button, } from 'react-native-paper';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import PasswordInputText from 'react-native-hide-show-password-input';
import VarGlobal from '../../enviroment/VarGlobal'
import Profile from './Profil'

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      textUsername: '',
      textPass: '',
    }
  }
  seleksiLogin = async () => {
    try {
      //Fetch Data USERNAME dan PASSWORD API , LALU PENGECEKAN , JIKA MATCH BERI TOKEN
      let tempUser = {
        username: this.state.textUsername,
        password: this.state.textPass
      }
      await axios.post("http://skut-kost-api.herokuapp.com/api/v1/login", tempUser)
        .then((response) => {
          console.log(response)
          if (typeof response.data.token !== 'undefined') {
            AsyncStorage.setItem('userToken', response.data.token);
            this.props.navigation.navigate('PrivateStack')
          } else {
            alert('Gagal Login')
          }
        })
        .catch((error) => {
          alert(error)
        });
    }
    catch (e) {
      console.log(e)
    }
  }


  render() {

    return (

      <ScrollView style={{ backgroundColor: '#e67e22' }}>

        <View style={styles.container}>

          <View style={styles.logoContainer}><Image style={styles.logo}
            source={require('./icon.png')} />

            <View style={styles.loginitem}>
              <Text style={styles.title}>Login</Text>

              <Text style={{ fontSize: 15, textAlign: 'center', marginBottom: 20, color: '#FFF' }}>SkutKost Mudah Cepat Dan Tepat dimanapun kostnya carinya pasti di SkuKost</Text>
            
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <TextInput placeholder="Username" placeholderTextColor="rgba(255,255,255,0.9)"
                  style={styles.input}
                  onChangeText={(textUsername) => this.setState({ textUsername })} />
              </View>
              <View style={{ marginTop: 20, marginLeft: 20 }}>
          
              </View>
              <View style={{ marginTop: 20, marginLeft: 20 }}>
                <PasswordInputText
                  secureTextEntry
                  placeholderTextColor="rgba(255,255,255,0.9)"
                  style={styles.passinput}
                  onChangeText={(textPass) => this.setState({ textPass })}
                />
              </View>

              {/* <TextInput placeholder="Password" placeholderTextColor="rgba(255,255,255,0.9)"
                 value={this.state.password}
                onChangeText={(password) => this.setState({ password })}/> */}
     
              <Button style={styles.button} mode="contained"
                onPress={this.seleksiLogin}>
                <Text style={styles.title2}>Login</Text>
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
  },

  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom: 10,
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 40,
  },

  input: {
    height: 50,
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingBottom: 10,
    color: '#FFFFFF',
    borderRadius: 20,
    textAlign: 'center',
  },
  passinput: {
    height: 50,
    paddingBottom: 30,
    marginBottom: 40,
    color: '#FFFFFF',
    textAlignVertical: 'center',
    textAlign: 'auto',
    borderRadius: 20,
  },

  logo: {
    justifyContent: 'center',
  },

  button: {
    marginTop: 10,
    marginRight:20,
    marginLeft:20,
    borderRadius: 20,
    backgroundColor: '#16a085',
  },

  title2: {
    fontWeight: 'bold',
    color: '#FFF',
  }
})

export default Login