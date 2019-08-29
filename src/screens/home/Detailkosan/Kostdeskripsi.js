 //import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";

// create a component
class KosDescription extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Luas Kamar</Text>
          <View style={styles.luasKamarContainer}>
            <Icon style={styles.icon} name="city" size={28} />
            <Text style={styles.luasKamar}> 3x3 (m)</Text>
          </View>
        </View>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Fasilitas kos dan Kamar</Text>
          <View style={styles.fasilitasKos}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="seat-individual-suite" size={28} />
                <Text style={styles.fasilitasText}>Kasur</Text>
              </View>
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="water" size={28} />
                <Text style={styles.fasilitasText}>Kamar Mandi</Text>
              </View>
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name= "jquery" size={28} />
                <Text style={styles.fasilitasText}>AC</Text>
              </View>
              <View style={styles.fasilitasContainer}>
                <Icon style={styles.icon} name="access-point" size={28} />
                <Text style={styles.fasilitasText}>Wifi</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.luasContainer}>
          <Text style={styles.title}>Deskripsi Kos</Text>
          <Text style={styles.text}>Kosan Idaman Mertua</Text>  
        </View>
        <View style={styles.pemilikContainer}>
          <Text style={styles.infoText}>
            Data bisa berubah sewaktu-waktu, Konfirmasi data saat ini.
          </Text>
          <View style={styles.pemilik}>
            <Icon
              style={styles.pemilikIcon}
              name="account-card-details-outline"
              size={40}
            />
            <View style={styles.pemilikDetail}>
              <Text style={styles.pemilikText}>Pemilik Kos</Text>
              <Text style={styles.pemilikText}>
              Mr Haji
              </Text>
              <Text style={styles.pemilikHp}>
               0815881188
              </Text>
            </View>
            <View style={styles.nomorPemilik}>
              <Text
                style={styles.nomorHp}
                onPress={() => alert(this.props.kostList.pemilik.noHp)}
              >
                Minta Nomor
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {},
  luasTitle: {},
  luasContainer: {
    padding: 20,
    paddingBottom: 0
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
});

//make this component available to the app
export default KosDescription;