import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

// create a component
class Cardlist extends Component {
  render() {
    return (
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={this.props.item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.kotaItem}>
            <Image
              source={{ uri: item.image }}
              style={[styles.image, { ...this.props.style }]}
            />
            <Text style={styles.namaKota}>{item.nama}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  kotaText: {
    fontSize: 17,
    fontWeight: "700",
    paddingLeft:10,
    left: 10,
    color: "#000"
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 5,
    marginLeft: 10
  },
  kotaItem: {
    marginTop: 10,
    marginRight: 5,
    marginLeft:5
  },
  namaKota: {
    color: "#2c3e50",
    textAlign: "center",
    position: "absolute",
    top: 100,
    left: 10,
    color: "#fff"
  },
  kotaContainer: {
    flexDirection: "row"
  }
});

//make this component available to the app
export default Cardlist;