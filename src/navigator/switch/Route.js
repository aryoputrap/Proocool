import React, { Component } from 'react'
import {
    ActivityIndicator,
    Text, View, Button
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import AsyncStoreage from '@react-native-community/async-storage';


 class Route extends Component {

    state = {
        jalan: ''
    }

    constructor(props) {
        super(props);
        console.log('asd')
        // this._bootstrapAsync();
    }
    render(){
        return (
            <View>
                <Text>
                    Tungu.......
                </Text>
            </View>
        );

    }
}
export default Route;