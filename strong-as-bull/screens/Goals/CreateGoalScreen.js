import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";


export default class CreateGoalScreen extends React.Component {
    static navigationOptions = {
        title: 'CreateGoal',
    };

    constructor(props) {
        super(props);
        this.state = {
            new_step_goal: 10000,
        };
    };

    setNewGoal() {
        this.setState({new_step_goal: Number(this.state.new_step_goal)});
        console.log(typeof this.state.new_step_goal);
        console.log(this.state.new_step_goal);
        if (typeof this.state.new_step_goal === "number") {
            const {params} = this.props.navigation.state;
            params.setGoal(this.state.new_step_goal);
            this.props.navigation.navigate('Goals');
        }
        else{
            alert('New step goal must be a number!');
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>Number of Steps:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='10000'
                    onChangeText={(new_step_goal) => this.setState({new_step_goal: Number(new_step_goal)})}
                    placeholderTextColor='black'
                    underlineColorAndroid='transparent'/>
                <TouchableOpacity style={styles.addButton} onPress={() => this.setNewGoal()}>
                    <Text style={styles.addButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20

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
        position: 'absolute',
        backgroundColor: '#E91E63',
        width: 300,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        bottom: 100,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
    },

});
