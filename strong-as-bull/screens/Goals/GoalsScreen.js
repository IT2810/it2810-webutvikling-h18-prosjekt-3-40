import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Goal from '../../components/Goal.js';

export default class GoalsScreen extends React.Component {
    static navigationOptions = {
        title: 'Goals',
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.goalScrollView}>
                    <Goal title='Goal 1' description='Goal Description' />
                    <Goal title='Goal 2' description='Goal Description' />
                    <Goal title='Goal 3' description='Goal Description' />
                    <Goal title='Goal 4' description='Goal Description' />
                    <Goal title='Goal 5' description='Goal Description' />
                    <Goal title='Goal 6' description='Goal Description' />
                    <Goal title='Goal 7' description='Goal Description' />
                    <Goal title='Goal 8' description='Goal Description' />
                    <Goal title='Goal 9' description='Goal Description' />
                </ScrollView>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
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
    goalScrollView: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginBottom: 80,
    },
    addButton: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },

});
