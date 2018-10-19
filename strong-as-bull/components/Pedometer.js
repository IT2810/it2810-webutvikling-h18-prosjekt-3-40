import Expo from "expo";
import React from "react";
import { Pedometer } from "expo";
import { StyleSheet, Text, View } from "react-native";

export default class PedometerSensor extends React.Component {
    state = {
        isPedometerAvailable: "checking",
        pastStepCount: 0,
        currentStepCount: 0,
        status: '',
        date_from: this.props.date_from,
        date_to: this.props.date_to,
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
                currentStepCount: result.steps
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



        const start = new Date(this.state.date_from);
        const end = new Date(this.state.date_to);




        Pedometer.getStepCountAsync(start, end).then(
            result => {
                this.setState({ pastStepCount: result.steps });

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
                <Text>Current steps: {this.state.currentStepCount + this.state.pastStepCount}</Text>
                <Text>
                    Steps taken in the last 24 hours: {this.state.pastStepCount}
                </Text>
                <Text>Walk! And watch this go up: {this.state.currentStepCount}</Text>
                <Text>Status: {this.state.status}</Text>
                <Text>{new Date(this.props.date_from).toString()}</Text>
                <Text>{new Date(this.props.date_to).toString()}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center"
    }
});

Expo.registerRootComponent(PedometerSensor);