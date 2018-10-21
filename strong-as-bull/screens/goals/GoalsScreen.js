import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Pedometer from "../../components/Pedometer";


export default class GoalsScreen extends React.Component {
    static navigationOptions = {
        title: 'Goals',
    };

    constructor(props) {
        super(props);
        this.state = {
            step_goal: 0,
        };
    };


    //Sets the default step goal
    componentDidMount() {
        this.setState({step_goal: 10000});
    };


    //This function is passed in the navigation property to set the step_goal state from CreateGoalScreen
    setGoal(new_step_goal){
        this.setState({step_goal: new_step_goal});
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.goalView}>
                    <Text style={styles.goalText}>DAILY STEP GOAL</Text>
                    <Text>Daily goal is to walk more than {this.state.step_goal} steps every day</Text>
                    <Pedometer
                        step_goal={this.state.step_goal}
                    />
                </ScrollView>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => this.props.navigation.navigate('CreateGoal', { 'setGoal': (new_step_goal => this.setGoal(new_step_goal)) })} >
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    goalScrollView: {
        borderBottomColor: 'grey',
        borderBottomWidth: 2,
        marginBottom: 80,
    },
    goalView: {
        paddingBottom: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    goalText: {
        fontSize: 30,
    },

    addButton: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        backgroundColor: '#999',
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
