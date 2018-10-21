import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Thumbnail} from "native-base";

export default class HomeScreen extends React.Component{

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.picture}>
                    <Thumbnail source={require('../assets/images/icon.png')} large style={styles.image} />
                </View>
                <Text style={styles.welcome}>
                    Welcome to
                </Text>
                <Text style={styles.name}>
                    Strong as Bull!
                </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 50,
    },
    name: {
        padding: 10,
        fontSize: 35,
        justifyContent: 'center',
        textAlign: 'center',
    },
    welcome: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
    picture: {
        alignItems: 'center',
    },
    image: {
        height: 200,
        width: 200,
    }
});