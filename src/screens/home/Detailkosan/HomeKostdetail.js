import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet, View, TouchableOpacity, Image, Share} from 'react-native';
import { Button, IconButton, Appbar, Card, } from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-community/async-storage';


import Kostdeskripsi from './Kostdeskripsi'
import Kosthubungi from './Kosthubungi'
import Kostmenarik from './Kostmenarik'
import Mapdetail from './Mapdetail'
import Header1 from '../../../components/header/header_booking1'
// import Searchinput from '../../../component/Searchinput'





export default class List extends Component {

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

  handleGoBack = () => {
    this.props.navigation.navigate("List");
  };
  cekNominal = nominal => {
    const reverse = nominal
      .toString()
      .split("")
      .reverse()
      .join("");
    const ribuan = reverse.match(/\d{1,3}/g);
    const hasil = ribuan
      .join(".")
      .split("")
      .reverse()
      .join("");
    return hasil;
  };

  constructor() {
    super();
    this.state = {
      isFotoState: true
    };
  }

  static navigationOptions = {
    title: 'Detail Kos',
    headerStyle: {
      backgroundColor: '#00BFFF',
    },
    headerTintColor: '#2d3c4d',
    headerTitleStyle: {
      fontWeight: 'bold',
    }, headerRight: (
      <TouchableOpacity onPress={() => alert('Share Btn')} style={{ marginRight: 10 }}>
        <IonIcon name='ios-git-merge' size={30} color='white' />
      </TouchableOpacity>
    )
  };
  handleShare = async () => {
    try{
        const result = await Share.share({
            message : 'Share'
        })
    }catch(ex){
        alert(ex.message)
    }
  }
  state = {
    isPhoto: true
  }

  renderPhoto(isPhoto) {
    if (isPhoto) {
      return (
      <Mapdetail />
      )
    } else {
      return (<Image source={{ uri: this.props.navigation.getParam('item').image }} style={{ width: 450, height: 200 }} ></Image>)
    }
  }

  _onPressButton() {
    style={backgroundColor:'#e67322'}
  }

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
      <Container>
        <Header1 navigation={this.props.navigation}/>
        <Content>
          
          {this.renderPhoto(this.state.isPhoto)}
          <View style={{ flexDirection: 'row',backgroundColor: '#e67e22'}}>
            <Button
              accessibilityLiveRegion='assertive'
              onPress={this.props.Homedetail}
              style={styles.Button}
              mode={'contained'}
              marginLeft={1}
              onPress={() => this.setState({ isPhoto: false })}>
              <Icon alignContent='center' name="home" size={30} color={'#FFFF'} />
            </Button>
           <Button
              mode={'contained'}
              style={styles.Button}
              marginRight={10}
              onPress={() => this.setState({ isPhoto: true})}>
              <Icon name="earth" size={30} color={'#FFFF'} />
            </Button>


          </View>
          <View style={{ flexDirection: 'row' }}>
            <IconButton
              icon="favorite-border"
              color={'#e67e22'}
              size={20}
              onPress={this._onPressButton} />
            <IconButton
              icon="share"
              color={'#e67e22'}
              size={20}
              onPress={this.handleShare}/>
          </View>
          <View style={styles.descriptionContainer} marginLeft={10}>
            <Text style={styles.jenis}>{this.props.navigation.getParam('item').jenis}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.kondisi}>{this.props.navigation.getParam('item').kondisi}</Text>
            <Text style={styles.separated}>•</Text>
            <Text style={styles.alamat}>{this.props.navigation.getParam('item').alamat}</Text>
          </View>
          <View marginLeft={10}><Text style={styles.namaTempat}>{this.props.navigation.getParam('item').namaTempat}</Text></View>

          <Kostdeskripsi />
          <Kostmenarik />
          {/* <Kosthubungi/> */}
          <View style={styles.btnContainer}>

            {/* //Buat dalam satu tabel */}

          </View>
        </Content>
        {/* <Card style={{ }}> */}
          <View style={{marginTop:5, borderEndColor:'grey',flexDirection: 'row', marginBottom: 10 }}>
            <View style={{ flex: 1, backgroundColor: '#ffff', marginLeft: 20 }}>
              <Text style={styles.harga}>
                Rp {this.cekNominal(this.props.navigation.getParam('item').harga)} / Bulan
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <View flexDirection={'row'}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => this.props.navigation.navigate("Hubungi")}>
                  <Text style={styles.btnBooking}>Hubungi Kost</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={()=>{
                    if(this.state.udahLogin){
                      this.props.navigation.navigate('BookingPublic')
                    }else{
                      this.props.navigation.navigate('LoginPublic')
                   } 
                  }}>
                  <Text style={styles.btnBooking}>Booking</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        {/* </Card> */}
      </Container>

    );
  }
}

const styles = StyleSheet.create({

  Button: {
    paddingBottom:20,
    width: 220,
    height: 40,
    color: 'black',
    marginRight: 1,
    alignContent: 'center',
    backgroundColor: '#e67e22',
  }, btnContainer: { flexDirection: "row", justifyContent: "flex-end" },
  hargaContainer: {
    flex: 1
  },
  Searchbar: {
    borderRadius: 20,
    position:'absolute',
    width: null,
    height: 40,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 10,
    backgroundColor: '#FFFF',
    opacity: 0.5
  },
  harga: {
    color: "#2c3e50",
    marginTop: 20,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "500"
  },
  btnHubungiKos: {
    padding: 4,
    borderColor: "#2980b9",
    borderWidth: 1,
    borderRadius: 5,
    width: 80,
    textAlign: "center"
  },
  btnBooking: {
    padding: 5,
    width: 80,
    color: "#fff",
    textAlign: "center"
  },
  btn: {
    borderRadius: 5,
    height: 45,
    backgroundColor: '#e67e22',
    justifyContent: "center",
    marginRight: 20
  },
  image: {
    resizeMode: "cover",
    marginHorizontal: 17,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  },
  booking: {
    alignSelf: "center",
    color: "black",
    fontWeight: 'bold'
  },
  descriptionContainer: {
    paddingTop: 10,
    flexDirection: "row"
  },
  bookingContainer: {
    marginTop: 2,
    padding: 5,
    backgroundColor: "#e67e22",
    width: 120,
    borderRadius: 15
  },
  jenis: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  buttonx: {
    borderRadius: 30,
    width: 130,
    marginBottom: 1,
    marginRight: 230,
    backgroundColor: '#e67e22',
  },
  kondisi: {
    color: "black",
    fontWeight: "200",
    fontSize: 14
  },
  alamat: {
    color: "black",
    fontWeight: "bold",
    marginLeft: 5,
    fontSize: 14,
    top: 2
  },
  harga: {
    fontSize: 18,
    color: "black",
    fontWeight: "700"
  },
  namaContainer: {
    paddingVertical: 5
  },
  namaTempat: {
    color: "black",
    fontSize: 18,
    fontWeight: "400"
  },
  separated: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    color: "black",
    fontWeight: "700"
  },
})
