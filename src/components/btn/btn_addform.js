import * as React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native'
import { Button, Checkbox, TextInput, } from 'react-native-paper'
import { Container, Content, View, Text, } from 'native-base'



class Form extends React.Component {

    render() {

        return (
                    <View>
                        <Button style={styles.button} mode="contained" onPress={() => console.log('Pressed')}>
                            <Text style={styles.title2}>Pasang Iklan</Text>
                        </Button>

                    </View>
        )

    }

}
export default Form

const styles = StyleSheet.create({

    button: {
        borderRadius: 20,
        backgroundColor: '#e67e22',
        marginRight: 20,
        marginBottom:20,
        marginLeft: 20,
        alignItems: 'center'
    },

    title2: {
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
        marginEnd: 10,
        marginVertical: 10
    },
})

