import React, { Component } from 'react';
import {StyleSheet,Dimensions} from 'react-native';
import {View, Content} from 'native-base';
import MapView , { PROVIDER_GOOGLE } from 'react-native-maps';

const styles = StyleSheet.create({
      container: {
      height: 200,
      width: 500
    }});
export default class LihatMap extends Component
{
    render()
    
        {
            const { width, height } = Dimensions.get('window');
            return(
                <Content>
                     <View>
                            <MapView 
                                    provider={PROVIDER_GOOGLE} 
                                    style={styles.container}
                                    Region={{ 
                                        latitude: 106.61987,
                                        longitude: -6.90994,
                                        longitudeDelta:(0.0),
                                        latitude:(0.0),
                                    }}>
                        </MapView>
                    </View>
                </Content>
            );
        }
}