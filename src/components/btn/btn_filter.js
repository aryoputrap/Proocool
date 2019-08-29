import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Button } from 'react-native-paper';
import Modal from 'react-native-modal'



export default class List extends Component {
  handelSortOptionPress = (opt) => {
    this.setState(
      {
        sortOption: opt
      }
    )
  }
  constructor(props) {
    super(props)
    this.state = {
      visibleModal: null,
      sortOption: 'acak'
    }
  }
  handelSortOptionPress = (opt) => {
    this.setState(
      {
        sortOption: opt
      }
    )
  }
  render() {
    return (
      <View style={{ position: 'absolute', Bottom: 0, flexDirection: 'row', marginTop: 630, marginLeft: 120, alignContent: 'center' }}>
        <Button
          onPress={() => alert('Ini Filter')}
          style={styles.Button} icon="art-track" size={50} color={'#e67e22'} mode={'outlined'}>
          <Text>Filter</Text>
        </Button>
        <Button
          onPress={() => { this.setState({ visibleModal: 'sort' }) }}
          style={styles.Button} icon="low-priority" size={50} color={'#e67e22'} mode={'outlined'}>
          <Text>Urutkan</Text>
        </Button>
        <Modal
          isVisible={this.state.visibleModal === 'sort'}
          onSwipeComplete={() => this.setState({ visibleModal: null })}
          swipeDirection={['up', 'left', 'right', 'down']}
          style={styles.sortModal}
          onBackdropPress={() => this.setState({ visibleModal: null })}
        >
          <View style={styles.sortModalContent}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#e67e22', paddingLeft: 20, paddingBottom: 20, marginBottom: 20 }}>
              <Text style={styles.contentTitle}>Urutkan Dari</Text>
            </View>
            <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('termurah')}>
              <Text style={{ color: this.state.sortOption === 'termurah' ? '#e67e22' : 'silver' }}>Harga Termurah</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('termahal')}>
              <Text style={{ color: this.state.sortOption === 'termahal' ? '#e67e22' : 'silver' }}>Harga Termahal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('kosong')}>
              <Text style={{ color: this.state.sortOption === 'kosong' ? '#e67e22' : 'silver' }}>Kosong ke Penuh</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortOption} onPress={() => this.handelSortOptionPress('penuh')}>
              <Text style={{ color: this.state.sortOption === 'penuh' ? '#e67e22' : 'silver' }}>Penuh ke Kosong</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  Button: {
    width: 100,
    height: 40,
    backgroundColor: 'white',

  },
  sortModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  sortModalContent: {
    backgroundColor: 'white',
    paddingVertical: 20,
    justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  sortOption: {
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 20
  },
  Bar: {
    maxWidth: 6,
    height: 40,
    backgroundColor: 'white',
  },
  Viewx: {
    marginLeft: 30,
  }

})