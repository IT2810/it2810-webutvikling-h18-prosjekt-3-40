import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default class Goal extends React.Component {

    deleteThisGoal () {
        this.props.deleteGoal(this.props.index)
    }

    render () {
        return(
            <View style={styles.goalView}>
                <Text style={styles.goalText}>{this.props.title}</Text>
                <Text>{this.props.description}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteThisGoal(false)} >
                    <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    goalView: {
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    goalText: {
        fontSize: 20,
    },
    deleteButton: {
        position: 'absolute',
        zIndex: 11,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d42424',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    deleteText: {
        fontSize: 20,
        color: '#fff'
    },


});