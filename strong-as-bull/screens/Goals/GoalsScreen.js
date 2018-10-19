import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from "react-native";
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
            goals: [
                    {title: 'Goal 1', description: 'Description 1'},
                    {title: 'Goal 211', description: 'Description 2'},
                    {title: 'Goal 3', description: 'Description 3'},
                    {title: 'Goal 4', description: 'Description 4'},
                    {title: 'Goal 5', description: 'Description 5'},
                    {title: 'Goal 6', description: 'Description 6'}
            ]


            //goals: [['Goal 1', 'Description 1'],
            //    ['Goal 2', 'Description 2'],
            //    ['Goal 3', 'Description 3'],
            //    ['Goal 4', 'Description 4'],
            //    ['Goal 5', 'Description 5'],
            //    ['Goal 6', 'Description 6'],
            //    ['Goal 7', 'Description 7'],
            //    ['Goal 8', 'Description 8'],]
        });
        this.storeItem('goals', this.state.goals);
        const newGoals = this.retrieveItem('goals');
        this.setState = {
            goals: newGoals
        }
    };

    async storeItem(key, item) {
        try {
            //we want to wait for the Promise returned by AsyncStorage.setItem()
            //to be resolved to the actual value before returning the value
            var jsonOfItem = await AsyncStorage.setItem(key, JSON.stringify(item));
            return jsonOfItem;
        } catch (error) {
            console.log(error.message);
        }
    }

    async retrieveItem(key) {
        try {
            const retrievedItem =  await AsyncStorage.getItem(key);

            let item = JSON.parse(retrievedItem);
            let goals = [];
            for (var i=0; JSON.parse(retrievedItem).length; i++){
                goals.push(JSON.parse(retrievedItem)[i]);
            }
            return goals;
        } catch (error) {
            console.log(error.message);
        }

    }

    deleteGoal(i) {
        let arr = this.state.goals;
        arr.splice(i, 1);
        this.setState({goals: arr})
    }

    //eachGoal = (goal, i) => {
    //    return (<Goal key={i} index={i} title={goal[0]} description={goal[1]} deleteGoal={this.deleteGoal.bind(this)}/>)
    //};

    eachGoal = (goal, i) => {
        return (<Goal key={i} index={i} title={goal.title} description={goal.description} deleteGoal={this.deleteGoal.bind(this)}/>)
    };

    render() {


        return (
            <View style={styles.container}>
                <ScrollView style={styles.goalScrollView}>
                    {
                        this.state.goals.map(this.eachGoal)
                    }
                </ScrollView>
                <Text>{JSON.stringify(this.state.goals)}</Text>
                <Text>{goals}</Text>

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
