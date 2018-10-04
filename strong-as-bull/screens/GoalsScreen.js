import React from 'react';
import {ScrollView, StyleSheet, Text} from "react-native";

export default class GoalsScreen extends React.Component {
    static navigationOptions = {
        title: 'Goals',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    This is the Goals screen
                </Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
