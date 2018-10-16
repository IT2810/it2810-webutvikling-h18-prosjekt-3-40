import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";

export default class CreateGoalScreen extends React.Component {
    static navigationOptions = {
        title: 'CreateGoal',
    };

    render() {
        let pedoAvail = '';
        if (Expo.Pedometer.isAvailableAsync()) {
            pedoAvail = 'Pedometer is available for your device'
        }
        else {
            pedoAvail = 'Pedometer is not available for your device'
        }
        return (
            <View style={styles.container}>
                <Text>Goal Title:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Write here'
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'/>
                <Text>Description:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Write here'
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'/>
                <Text>Number of Steps:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Write here'
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'/>
                <Text>Finish Date:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Write here'
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'/>
                <Text>{pedoAvail}</Text>
                <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('Goals')}>
                    <Text style={styles.addButtonText}>Add Goal</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#000',
        padding: 5,
        backgroundColor: '#cccccc',
        borderWidth: 1,
        borderColor: '#ededed',
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: '#E91E63',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },

});
