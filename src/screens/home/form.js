import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native'
import { Button, Checkbox, TextInput, } from 'react-native-paper'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import { Container, Content, View, Text, } from 'native-base'
import ImagePicker from 'react-native-image-picker';
import { Dropdown } from 'react-native-material-dropdown'

import Map from '../../../src/components/map/map'
import Facilities from '../../components/form/facilities'
import Headerads from '../../components/header/header_ads'
import BtnUpload from '../../components/btn/btn_uploadfoto'
import BtnAdd from '../../components/btn/btn_addform'
import OwnTextInput from '../../components/form/InputOwnKost'
import Adress from '../../components/form/InputAdress'



class Form extends React.Component {
    state = {
        NamaKost: '',
        AlamatKost: '',
        PengelolaKost: '',
        Harga: '',
        HPKost: '',
        Latitude: '',
        Longitude: '',
        LuasKost: ''

    };

    simpanData = async () => {
        try {
          const userTokenTemp = await AsyncStorage.getItem('userToken');
          const userStrTemp = await AsyncStorage.getItem('userObj');
          const objUser = await JSON.parse(userStrTemp);
    
          const provinsiFilter = this.state.dataProv.filter((item) => {
            return item.id == this.state.tmpProv
          })
          const kabupatenFilter = this.state.dataKab.filter((item) => {
            return item.id == this.state.tmpKab
          })
    
          await this.setState({
            dataItem: {
              name: this.state.tmpname,
              lat: this.state.region.latitude.toString(),
              long: this.state.region.longitude.toString(),
              room: parseInt(this.state.tmproom),
              price: parseInt(this.state.tmpprice),
              type: this.state.tmptype,
              description: this.state.tmpdescription,
              province: provinsiFilter[0].nama,
              city: kabupatenFilter[0].nama,
              description: this.state.tmpdescription,
              photo: this.state.avatarSource,
              wc: this.state.tmpwc,
              wifi: this.state.tmpwifi,
              keyRoom: this.state.tmpkeyRoom,
              bed: this.state.tmpbed,
              electric: this.state.tmpelectric,
              size: `${this.state.tmpPanjangKamar}x${this.state.tmpLebarKamar}m`,
              userId: objUser.id
            }
          })
    
          let data = new FormData();
          // data.append({ uri: photo.uri, type: photo.type, name: photo.fileName });
          data.append('name', this.state.dataItem.name);
          data.append('lat', this.state.dataItem.lat);
          data.append('long', this.state.dataItem.long);
          data.append('room', this.state.dataItem.room);
          data.append('price', this.state.dataItem.price);
          data.append('type', this.state.dataItem.type);
          data.append('size', this.state.dataItem.size);
          data.append('description', this.state.dataItem.description);
          data.append('province', this.state.dataItem.province);
          data.append('city', this.state.dataItem.city);
          data.append('wc', this.state.dataItem.wc);
          data.append('wifi', this.state.dataItem.wifi);
          data.append('keyRoom', this.state.dataItem.keyRoom);
          data.append('bed', this.state.dataItem.bed);
          data.append('electric', this.state.dataItem.electric);
          data.append('photo', this.state.dataItem.photo);
          data.append('userId', this.state.dataItem.userId);
    
          this.props.dispatch(addKost(data, userTokenTemp))
        } catch (e) {
          console.log(`ERROR DI Simpan Data Iklan Tambah : ${e}`)
        }
      }
      _aksiTambah = () => {
        this.simpanData();
      }
    
    render() {

        return (

            <Container>
                <Headerads navigation={this.props.navigation} />
                <Content>
                    <View>
                    <Text style={{marginLeft:20, marginTop:10}}>Detail Kost :</Text>
                        <OwnTextInput />
                        <Text style={{marginLeft:20, marginTop:10}}>Alamat Kost :</Text>
                        <Adress />
                    </View>
                    <Text style={{marginLeft:20, marginTop:10}} >Fasilitas Kost :</Text>
                    <TextInput
                        mode='outlined'
                        style={styles.input}
                        label='Luas Kost (meter)'
                        value={this.state.LuasKost}
                        onChangeText={LuasKost => this.setState({ LuasKost })}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 5
                        }}>
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginBottom: 5
                        }}>
                        </View>
                        <Facilities style={{ marginLeft: 20 }} />
                    </View>
                    <BtnUpload 
                    style={{marginRight:20, marginLeft:20}}
                    navigation={this.props.navigation}/>
                    <View>
                        <Button 
                        style={styles.button} mode="contained" 
                        onPress={this._aksiTambah}>
                            <Text style={styles.title2}>Pasang Iklan</Text>
                        </Button>
                    </View>
                
                
                </Content>
            </Container>

        )

    }

}
export default Form

const styles = StyleSheet.create({

    input: {

        height: 50,
        marginBottom: 8,
        borderColor: '#e67e22',
        color: '#e67e22',
        textAlign: 'justify',
        textAlignVertical: 'auto',
        marginRight: 20,
        marginLeft: 20
    },

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
        marginRight: 20,
        marginBottom:20,
        marginLeft: 20,
        alignItems: 'center'
    },
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
    title2: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 30,
        marginEnd: 10,
        marginVertical: 10
    },
    Aheader: {
        backgroundColor: '#e67e22',
        fontWeight: 'bold',
        marginHorizontal: 130
    },
    latlong: {
        height: 50,
        marginBottom: 5,
        textAlign: 'justify',
        textAlignVertical: 'auto',
        width: 150,
        marginRight: 20,
        marginLeft: 20

    },
    luasKamarContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10
    },
    luasKamar: {
        marginLeft: 10,
        fontSize: 15,
        color: "#2c3e50"
    },
    title: {
        color: "#2c3e50",
        fontSize: 15,
        fontWeight: "500"
    },

    fasilitasKos: {
        paddingTop: 20,
        marginLeft: -20,
        justifyContent: "center"
    },
    fasilitasContainer: {
        width: 90,
        justifyContent: "center"
    },
    fasilitasText: {
        textAlign: "center",
        color: "#2c3e50"
    },
    icon: {
        textAlign: "center",
        color: "#e67e22"
    },
    text: {
        color: "#2c3e50",
        marginTop: 10,
        marginBottom: 20
    },
    pemilikContainer: {
        backgroundColor: "#ecf0f1",
        padding: 20
    },
    infoText: {
        color: "#2c3e50",
        fontSize: 15
    },
    pemilikIcon: {
        color: "#e67e22",
        marginRight: 20
    },
    pemilik: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    pemilikText: {
        color: "#2c3e50",
        fontSize: 16,
        fontWeight: "500"
    },
    pemilikDetail: {
        marginLeft: 20
    },
    pemilikHp: {
        color: "#2c3e50",
        fontSize: 16,
        fontWeight: "400"
    },
    pemilikDetail: {
        flex: 1
    },
    nomorPemilik: {
        alignItems: "flex-end"
    },
    nomorHp: {
        color: "#e67e22"
    }
})

