//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Content, Body, Right, Badge } from 'native-base';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import Cardlist from "../../../component/cardlist";

// create a component
class KosMenarik extends Component {
  constructor() {
    super();
    this.state = {
      kotaPopuler: [
        {
          id: "1",
          image:
            "https://apollo-singapore.akamaized.net/v1/files/lgly7xr4o61a1-ID/image;s=966x691;olx-st/_1_.jpg",
          nama: "Jakarta"
        },
        // {
        //   id: "2",
        //   image:
        //     "https://www.kostjakarta.net/wp-content/uploads/2015/12/488761.jpeg",
        //   nama: "Yogyakarta"
        // },
        // {
        //   id: "3",
        //   image:
        //     "https://rumahdijual.com/attachments/jakarta-pusat/6789266d1473067337-rumah-kost-mewah-full-furnish-okupensi-99-3-lantai-img_7455.jpg",
        //   nama: "Bandung"
        // },
        // {
        //   id: "4",
        //   image:
        //     "https://imganuncios.mitula.net/dijual_kost_mewah_di_mampang_prapatan_jakarta_selatan_9060133538146117831.jpg",
        //   nama: "Surabaya"
        // },
        // {
        //   id: "5",
        //   image:
        //     "https://imganuncios.mitula.net/dijual_rumah_tempat_kos_mewah_di_setiabudi_jaksel_3710045556893230331.jpg",
        //   nama: "Semarang"
        // }
      ]
    };
  }
  render() {
    return (
    <Content>
      <View style={styles.container} >
      </View>
      <View>
        <Cardlist item={this.state.kotaPopuler} style={{ width: 400,height:265, marginBottom:10 }} />
      </View>
    </Content>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection:'row'
  },
  title: {
    color: "#2c3e50",
    fontSize: 15,
    marginTop:5,
    fontWeight: "300"
  },
  icon: {
    textAlign: "center",
    marginRight: 5,
    marginLeft: 10,
    color: "#e67e22"}
});

//make this component available to the app
export default KosMenarik;