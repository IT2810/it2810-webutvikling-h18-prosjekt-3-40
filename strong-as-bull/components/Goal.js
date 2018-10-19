import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Pedometer from "./Pedometer";

export default class Goal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            curr_steps: 0,
            status: 'Completed',
            isPedometerAvailable: "checking",
        };
    };


    deleteThisGoal () {
        this.props.deleteGoal(this.props.index)
    }

    updateSteps () {
        this.setState({curr_steps: 123})
    }

    render () {
        return(
            <View style={styles.goalView}>
                <Text style={styles.goalText}>{this.props.title}</Text>
                <Text>{this.props.description}</Text>
                <Text>Current steps: {this.state.curr_steps}</Text>
                <Text>Total steps: {this.props.tot_steps}</Text>
                <Text>Status: {this.state.status}</Text>
                <Text>Date from: {this.props.date_from.toString()}</Text>
                <Text>Date to: {this.props.date_to.toString()}</Text>
                <Text>Number of days: {this.props.date_to.getDate() - this.props.date_from.getDate()}</Text>
                <Pedometer updateSteps={this.updateSteps.bind(this)} date_from={this.props.date_from} date_to={this.props.date_to}/>

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