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
        let date_from = new Date('October 10, 2018');
        let date_to = new Date('October 20, 2018');
        this.setState({
            goals: [
                    {
                        "title": 'Goal 1',
                        "description": 'Description 1',
                        "tot_steps": 10,
                        "date_from": date_from,
                        "date_to": date_to,
                    },
                    {
                        "title": 'Goal 211',
                        "description": 'Description 2',
                        "tot_steps": 10,
                        "date_from": new Date(),
                        "date_to": new Date(),
                    },
                    {
                        "title": 'Goal 3',
                        "description": 'Description 3',
                        "tot_steps": 10,
                        "date_from": new Date(),
                        "date_to": new Date(),
                    },
                    {
                        "title": 'Goal 4',
                        "description": 'Description 4',
                        "tot_steps": 10,
                        "date_from": new Date(),
                        "date_to": new Date(),
                    },
                    {
                        "title": 'Goal 5',
                        "description": 'Description 5',
                        "tot_steps": 10,
                        "date_from": new Date(),
                        "date_to": new Date(),
                    },
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

        //AsyncStorage.setItem('goals', JSON.stringify(this.state.goals));
        //let newGoals = AsyncStorage.getItem('goals');
        //this.setState({goals: newGoals})
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
            return JSON.parse(retrievedItem);

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
        return (<Goal
            key={i}
            index={i}
            title={goal.title}
            description={goal.description}
            tot_steps={goal.tot_steps}
            date_from={goal.date_from}
            date_to={goal.date_to}
            deleteGoal={this.deleteGoal.bind(this)}
            />)
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
