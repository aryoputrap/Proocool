import * as React from 'react'
import { StyleSheet, ScrollView, Image, Animated } from 'react-native'
import { Button, Checkbox, TextInput, } from 'react-native-paper'
import { Container, Label, Picker, Item, Content, View, Text, Input } from 'native-base'
// import MapView from 'react-native-maps'
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

import Axios from 'axios';
// import Map from '../../../src/components/map/map'

class Form extends React.Component {

    constructor() {
        super()
        this.state = {
            province: [],
            selectedProvince: '',
            selectedCity: '',
            cities: [],

            src: [],
            selected: "Putra",
            region: {
                latitude: -6.90389,
                longitude: 107.61861,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,

            },
            markerRegion:
            {
                latitude: -6.90389,
                longitude: 107.61861,
            },
            modalVisible: false,

            data: {
                name: '',
                address: '',
                region: {
                    latitude: 0,
                    longitude: 0,
                },
                city: '',
                images: [

                ],
                description: '',
                roomNumber: 0,
                roomType: 'Putra',
                roomSize: {
                    width: '',
                    length: ''

                },
                facilities: [

                ],
                price: 0

            },

            // fasilitas: [
            //     {
            //         name: 'AC',
            //         checked: false,
            //     },
            //     {
            //         name: 'Wifi - Internet',
            //         checked: false,

            //     },
            // ]

        }
    }

    onValueChange = (value) => {
        this.setState({
            selected: value,
            data: {
                ...this.state.data,
                roomType: value
            }
        });
    }
    onProvinceChange = async (value) => {

        await this.setState({
            selectedProvince: value
        })
        console.log(value)
        const cities = await Axios.get(`http://dev.farizdotid.com/api/daerahindonesia/provinsi/${this.state.selectedProvince}/kabupaten`)

        this.setState({
            cities: cities.data.kabupatens
        })
    }
    onCityChange = async (value) => {
        await this.setState({
            selectedCity: value
        })

        const selectedCityName = this.state.cities.filter((data) => (
            data.id === this.state.selectedCity
        ))
        this.setState({
            data: {
                ...this.state.data,
                city: selectedCityName[0].nama

            }
        })
    }
    handleRegionChange = (region) => {
        this.setState({
            region,
            data: {
                ...this.state.data,
                region: {
                    latitude: region.latitude,
                    longitude: region.longitude,
                }
            }
        })
        if (this.marker) {
            this.marker._component.animateMarkerToCoordinate(region, 100);
        }

    }
    async componentDidMount() {
        const prov = await Axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi')
        await this.setState({
            province: prov.data.semuaprovinsi
        })
        console.log(this.state.province)

    }

    state = {
        NamaKost: '',
        AlamatKost: '',
        PengelolaKost: '',
        Latitude: '',
        Longitude: '',
        LuasKost: ''

    };

    render() {

        return (
            <Content>
                <TextInput
                    mode='outlined'
                    style={styles.input}
                    label='Alamat Kost'
                    value={this.state.AlamatKost}
                    onChangeText={AlamatKost => this.setState({ AlamatKost })}
                />
                <Text style={{ marginLeft: 20 }}> Pindahkan pin di Peta ke lokasi tepat kost anda :</Text>
                <View>
                    <Button style={styles.Searchbar} icon="search" mode="contained" onPress={() => console.log('Pressed')}> Search </Button>
                </View>
                <View style={{ paddingLeft: 20, paddingRight: 20, height: 200, marginBottom: 35, marginTop: 10 }}>
                    <MapView style={styles.map}
                        region={this.state.region}
                        onRegionChangeComplete={this.handleRegionChange}>
                        <Marker.Animated
                            ref={marker => {
                                this.marker = marker;
                            }}
                            coordinate={this.state.markerRegion}
                        />
                    </MapView>
                </View>


                    <View style={{ flexDirection: 'row', marginRight:20, marginLeft:20 }}>
                        <Item floatingLabel style={{ flex: 1 }}>
                            <Label>Latitude</Label>
                            <Input editable={false} value={this.state.region.latitude.toString()} />
                        </Item>
                        <Item floatingLabel style={{ flex: 1 }}>
                            <Label style={{color:'black'}}>Longitude</Label>
                            <Input editable={false} value={this.state.region.longitude.toString()} />
                        </Item>
                    </View>
                    <View style={{marginRight:20, marginLeft:20 }}>
                        <Item>
                            <Label>Provinsi</Label>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120, color: 'black', }}
                                selectedValue={this.state.selectedProvince}
                                onValueChange={this.onProvinceChange}
                            >

                                {this.state.province.map((data, index) => (
                                    <Picker.Item key={index} label={data.nama} value={data.id} />
                                ))}
                            </Picker>
                        </Item>
                        <Item>
                            <Label>Kota/Kabupaten</Label>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 170, color: 'black', }}
                                selectedValue={this.state.selectedCity}
                                onValueChange={this.onCityChange}
                            >

                                {this.state.cities && (this.state.cities.map((data, index) => (
                                    <Picker.Item key={index} label={data.nama} value={data.id} />
                                )))}
                            </Picker>
                        </Item>
                    </View>
            </Content>
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
    map: {
        ...StyleSheet.absoluteFillObject,
        marginLeft: 20,
        marginRight: 20


    },
    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
        marginRight: 20,
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
    radio: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        paddingRight: 10,
    },

    Searchbar: {
        borderRadius: 20,
        width: null,
        height: 40,
        marginTop: 10,
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginRight: 30,
        marginLeft: 30
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

