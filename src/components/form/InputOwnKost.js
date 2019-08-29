import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native'
import { Button, Checkbox, TextInput, } from 'react-native-paper'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'
import { Container, Content, View, Text, } from 'native-base'
import { Dropdown } from 'react-native-material-dropdown'


class Form extends React.Component {

    state = {
        NamaKost: '',
        AlamatKost: '',
        PengelolaKost: '',
        Harga: '',
        HPKost: '',
        Latitude:'',
        Longitude:'',
        LuasKost:''

    };

    render() {

        var jenis_kost = [
            { label: 'Campur', value: 0 },
            { label: 'Pria', value: 1 },
            { label: 'Putri', value: 2 },
        ];
        var kategori_kost = [
            { label: 'Hotel', value: 0 },
            { label: 'Apartemen', value: 1 },
            { label: 'Losmen', value: 2 },
        ];

        return (

                    <View>
                         <View style={{marginLeft:20, marginRight:20}}>
                        <Dropdown
                            label='Jenis Kost'
                            data={jenis_kost}
                        />
                        <Dropdown
                            label='Kategori Kost'
                            data={kategori_kost}
                        />
                        </View>
                        <TextInput
                            mode='outlined'
                            style={styles.input}
                            label='Nama Kost'
                            value={this.state.NamaKost}
                            onChangeText={NamaKost => this.setState({ NamaKost })}
                        />
                        <TextInput
                            mode='outlined'
                            style={styles.input}
                            label='Pengelola Kost'
                            value={this.state.PengelolaKost}
                            onChangeText={PengelolaKost => this.setState({ PengelolaKost })}
                        />

                        <TextInput
                            mode='outlined'
                            style={styles.input}
                            label='No.HP pengelola Kost'
                            value={this.state.HPKost}
                            onChangeText={HPKost => this.setState({ HPKost })}
                        />

                        <TextInput
                            mode='outlined'
                            style={styles.input}
                            label='Harga Bulanan'
                            value={this.state.Harga}
                            onChangeText={Harga => this.setState({ Harga })}
                        />
                </View>
                     
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

