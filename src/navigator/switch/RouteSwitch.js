import React, { Component } from 'react'
import {
    ActivityIndicator,
    Image,
    Text,
    View, 
    StatusBar
} from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';


 class RouteSwitch extends Component {

    state = {
        Oke: ''
    }

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {

        try {

            const fetchDataAwal = await AsyncStorage.getItem('userToken');
            const fetchDataUser = await AsyncStorage.getItem('userObj');
            const userObj = JSON.parse(fetchDataUser)

            if (fetchDataAwal != null) {
                this.props.navigation.navigate('PublicStack')
            } else {
                this.props.navigation.navigate('PrivateStack')
            }
        } catch (e) {
            alert(e)
        }
    };


    render(){
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e67e22'}}>
                <StatusBar backgroundColor="#f0932b" barStyle="light-content"/>
                <Image source={require('../../screens/profile/icon.png')}/>
                    <Text style={{ fontSize: 50, color: 'white' }}>Skut Kost</Text>
            </View>
        );

    }
}
export default RouteSwitch ;