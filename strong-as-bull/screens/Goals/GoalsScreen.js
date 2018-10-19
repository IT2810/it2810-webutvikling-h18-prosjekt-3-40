import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from "react-native";
import Goal from '../../components/Goal.js';
import Pedometer from "../../components/Pedometer";


export default class GoalsScreen extends React.Component {
    static navigationOptions = {
        title: 'Goals',
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            step_goal: 0,
            date_from: '',
            date_to: '',

        };
    };

    componentDidMount() {
        this.setState(
                    {
                        title: 'Goal 1',
                        description: 'Description 1',
                        step_goal: 8760,
                        date_from: 'October 10, 2018 00:00:00',
                        date_to: 'October 20, 2018 00:00:00',
                    }
        );

    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.goalView}>
                    <Text style={styles.goalText}>{this.state.title}</Text>
                    <Text>{this.state.description}</Text>
                    <Text>Step Goal: {this.state.step_goal}</Text>
                    <Text>Date from: {this.state.date_from}</Text>
                    <Text>Date to: {this.state.date_to}</Text>
                    <Text>Number of days: {new Date(this.state.date_to).getDate() - new Date(this.state.date_from).getDate()}</Text>
                    <Pedometer
                        date_from={this.state.date_from}
                        date_to={this.state.date_to}
                        step_goal={this.state.step_goal}
                    />
                </ScrollView>
                <TouchableOpacity style={styles.addButton} onPress={() => this.props.navigation.navigate('CreateGoal')} >
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
        backgroundColor: '#31bd52',
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
