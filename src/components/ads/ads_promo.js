import React, { Component } from 'react';
import Slideshow from 'react-native-slideshow';
import { View } from 'native-base';
export default class Iklan extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        position: 1,
        interval: null,
        dataSource: [
          { url: 'https://www.ahstatic.com/photos/7536_ho_00_p_1024x768.jpg',
          }, {
            url: 'http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/top10-hotels/pagePropertiesImage/viceroy-bali.jpg.jpg',
          }, {
            url: 'https://s-ec.bstatic.com/images/hotel/max1024x768/161/161955556.jpg',
          },{
            url: 'https://media.travelingyuk.com/wp-content/uploads/2018/02/Hotel-di-Jogja-dengan-Pemandangan-Gunung-Merapi.jpg',
          },
        ],
      };
    }
   
    componentWillMount() {
      this.setState({
        interval: setInterval(() => {
          this.setState({
            position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
          });
        }, 1500)
      });
    }
   
    componentWillUnmount() {
      clearInterval(this.state.interval);
    }
   
    render() {
      return (
      <View style={{ height:200, width: 400, marginRight:10, marginLeft:10}}>
      <Slideshow 
          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })} />
      </View>
      );
    }
  }