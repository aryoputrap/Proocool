import * as React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { CheckBox } from 'react-native-elements'

class IklanForm extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //         checked1: "",
    //         checked: "",
    //     };
    // }

    state = {
        Kasur: '',
        Toilet: '',
        Parkir: '',
        Wifi: '',
        AC: '',
        Dispenser: '',
        Laundry: '',

    };

    render() {
        // const { checked } = this.state;
        // const isEnable = checked == !false;

        // const { checked1 } = this.state;
        // const isEnable1 = checked1 == !false;

        return (

            <View
                style={{
                    marginBottom: 5
                }}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                    marginLeft:10,
                    flexWrap:'wrap',
                    justifyContent:'space-between'
                }}>


                    <CheckBox
                    style={{flex:1}}
                        title='Kasur'
                        checkedColor='#e67e22'
                        checked={this.state.Kasur}
                        onPress={() => this.setState({ Kasur: !this.state.Kasur })}
                    />
                        <CheckBox
                        style={{flex:1}}
                        title='Dispenser'
                        checkedColor='#e67e22'
                        checked={this.state.Dispenser}
                        onPress={() => this.setState({ Dispenser: !this.state.Dispenser })}
                    />
                    <CheckBox
                    style={{flex:1}}
                        title='Wifi'
                        checkedColor='#e67e22'
                        checked={this.state.Wifi}
                        onPress={() => this.setState({ Wifi: !this.state.Wifi })}
                    />
                {/* </View>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 5,
                    marginLeft:10
                }}> */}
                    <CheckBox
                    style={{flex:1}}
                        title='Toilet'
                        checkedColor='#e67e22'
                        checked={this.state.Toilet}
                        onPress={() => this.setState({ Toilet: !this.state.Toilet })}
                    />  
                    <CheckBox
                    style={{flex:1}}
                        title='Laundry'
                        checkedColor='#e67e22'
                        checked={this.state.Laundry}
                        onPress={() => this.setState({ Laundry: !this.state.Laundry })}
                    />
                    <CheckBox
                    style={{flex:1}}
                        title='AC'
                        checkedColor='#e67e22'
                        checked={this.state.AC}
                        onPress={() => this.setState({ AC: !this.state.AC })}
                    />
                  
                </View>
            </View>

        )

    }

}

const styles = StyleSheet.create({

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
        backgroundColor: '#95a5a6',
        opacity: 0.3,
        marginRight: 30,
        marginLeft: 30
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
    fasilitasText: {
        textAlign: "center",
        color: "#2c3e50"
    },
    icon: {
        textAlign: "center",
        color: "#e67e22"
    },
})

export default IklanForm