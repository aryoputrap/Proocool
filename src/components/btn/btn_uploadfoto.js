import * as React from 'react';
import { StyleSheet, ScrollView, Image,FlatList} from 'react-native'
import { Button, Checkbox, TextInput, } from 'react-native-paper'
import { Container, Content, View, Text, } from 'native-base'
import ImagePicker from 'react-native-image-picker';


class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            images: [
            ],
            province: [],
            selectedProvince: '',
            selectedCity: '',
            cities: [],

            src: [],
            selected: 'Putra',
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

            fasilitas: [
                {
                    name: 'AC',
                    checked: false,
                },
                {
                    name: 'Wifi - Internet',
                    checked: false,

                },
                {
                    name: 'Kasur',
                    checked: false,

                },
                {
                    name: 'TV',
                    checked: false,

                },
                {
                    name: 'Kamar Mandi Dalam',
                    checked: false,

                },
                {
                    name: 'Dapur',
                    checked: false,

                },
                {
                    name: 'Dispenser',
                    checked: false,
                },

            ]

        }
    }
    handleImagePicker = () => {
        const options = {
            title: 'Pilih Gambar',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            },
        }
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else {

                const source = { uri: response.uri }
                this.setState({
                    src: [...this.state.src, source],
                    data: {
                        ...this.state.data,
                        images: [
                            ...this.state.data.images,
                            response
                        ]
                    }
                })

            }
        })
    }
    render() {

        return (
                         <View style={{ paddingLeft: 17, marginTop: 15 }}>
                                <Text>Gambar Kost</Text>

                                {this.state.src && (
                                    <View style={{ paddingVertical: 10 }}>
                                        <FlatList
                                            horizontal={true}
                                            data={this.state.data.images}
                                            extraData={this.state}
                                            renderItem={({ item }) => {
                                                return (
                                                    <Image source={{ uri: item.uri }}

                                                        style={{ height: 100, width: 100, marginRight: 10 }}
                                                        resizeMode={'cover'}
                                                    />)
                                            }} />
                                    </View>
                                )
                                }
                        <Button style={styles.button} mode="contained" marginBottom={10}
                        onPress={this.handleImagePicker}
                        >
                            <Text style={styles.title2}>Upload Foto</Text>
                        </Button>
                    </View>
        )

    }

}
export default Form

const styles = StyleSheet.create({

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
        marginRight: 20,
        marginLeft: 20,
        alignItems: 'center'
    },

    title2: {
        fontWeight: 'bold',
        color: '#FFF',
        marginEnd: 10,
        marginVertical: 10
    },
})

