import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button  } from 'react-native-paper';
import { withNavigation } from "react-navigation";

// create a component
class Search extends Component {
  handleGoBack = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
   
    return (

        <View style={{position:'absolute',Bottom: 0,marginTop:80, marginLeft:230, alignContent:'center'}}>
            <Button
            onPress={this.handleGoBack}
            style={styles.Button} icon="art-track" size={100} color={'#e67e22'} mode={'outlined'}>
            <Text style={{textAlign:'center', position:'absolute', marginBottom:5}}>SELESAI</Text>
            </Button>
        </View>
        
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 20,
    flex: 1
  },
  Button: {
    width: 100,
    height: 33,
    backgroundColor: 'white',

    },
Bar: {
    maxWidth:6,
    height: 50,
    backgroundColor: 'white',
    },
Viewx:{
    marginLeft:30,
},
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#e67e22",
    borderColor:'#e67e22'
  },
  searchIcon: {
    paddingLeft: 20
  }
});

export default withNavigation(Search);