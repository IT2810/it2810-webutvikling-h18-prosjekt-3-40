import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Goal from '../../components/Goal.js';


export default class GoalsScreen extends React.Component {
    static navigationOptions = {
        title: 'Goals',
    };

    constructor(props) {
        super(props);
        this.state = {
            goals: []
        };
    };

    componentDidMount() {
        this.setState({
            goals: [['Goal 1', 'Description 1'],
                ['Goal 2', 'Description 2'],
                ['Goal 3', 'Description 3'],
                ['Goal 4', 'Description 4'],
                ['Goal 5', 'Description 5'],
                ['Goal 6', 'Description 6'],
                ['Goal 7', 'Description 7'],
                ['Goal 8', 'Description 8'],]
        })
    };

    deleteGoal(i) {
        let arr = this.state.goals;
        arr.splice(i, 1);
        this.setState({goals: arr})
    }

    eachGoal = (goal, i) => {
        return (<Goal key={i} index={i} title={goal[0]} description={goal[1]}/>)
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.goalScrollView}>
                    {
                        this.state.goals.map(this.eachGoal)
                    }
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

});
