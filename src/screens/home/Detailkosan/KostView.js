import React, { Component } from "react";
import { View, StyleSheet, Image, ScrollView, Dimensions } from "react-native";


const kostList = [
  {
    id: "1",
    image: [
      "https://static.mamikos.com/uploads/cache/data/style/2019-06-26/2bqd3PHd-540x720.jpg"
    ],
    harga: "1975000",
    namaKos: "Kost Kadesssa Denpasar Selatan Denpasar",
    ukuran: "3 x 4",
    deskripsi:
      "bangunan berwarna pink, didepannya terdapat Warung SSSERAM gambar ayam, Data bisa berubah sewaktu-waktu, tanyakan data saat ini.",
    pemilik: {
      nama: "Oscar Miguna",
      noHp: "081220112345"
    },
    jenis: "Putri"
  },
]

class KosView extends Component {
  render() {
    const { width } = Dimensions.get("window");
    return (
      <View style={{ display: this.props.display }}>
        <ScrollView
          pagingEnabled={true}
          horizontal={true}
          style={styles.imageContainer}
          showsHorizontalScrollIndicator={false}
        >
          {kostList.map((kostList, id) => (
            <Image
              key={id}
              style={[styles.image, { width: width }]}
              source={kostList.image}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 230
  },
  imageContainer: {
    height: 230
  }
});

export default KosView;