import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";
import * as Progress from 'react-native-progress';


export default class PedometerSensor extends React.Component {
    static navigationOptions = {
        title: 'Pedometer',
    };

    constructor(props) {
        super(props);
        this.state = {
            isPedometerAvailable: "checking",
            pastStepCount: 0,
            currentStepCount: 0,
            status: '',
            progress: 0,
        };
    };

    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {

        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps,
                progress: ((this.state.currentStepCount + this.state.pastStepCount) / this.props.step_goal),
            });
            if(this.state.currentStepCount + this.state.pastStepCount > this.props.step_goal){
                this.setState({
                    status: 'Completed'
                })
            }
            else{
                this.setState({
                    status: 'In Progress'
                })
            }

        });

        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result)
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: "Could not get isPedometerAvailable: " + error
                });
            }
        );

        let start = new Date();
        let end = new Date();
        start.setHours(0,0,0);

        Pedometer.getStepCountAsync(start, end).then(
            result => {
                this.setState({
                    pastStepCount: result.steps,
                    progress: result.steps/this.props.step_goal
                });

                if(this.state.pastStepCount > this.props.step_goal) {
                    this.setState({
                        status: 'Completed'
                    })
                }
                else {
                    this.setState({
                        status: 'In Progress'
                    })
                }
            },
            error => {
                this.setState({
                    pastStepCount: "Could not get stepCount: " + error
                });
            }
        );
    };

    _unsubscribe = () => {

        this._subscription && this._subscription.remove();
        this._subscription = null;
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Current steps: {this.state.currentStepCount + this.state.pastStepCount} / {this.props.step_goal}</Text>
                <Progress.Pie progress={this.state.progress} size={200} color={'rgba(100,100,100,1)'}/>
                <Text>Status: {this.state.status}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

});

Expo.registerRootComponent(PedometerSensor);