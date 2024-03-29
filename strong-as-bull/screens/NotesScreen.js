import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {ExpoLinksView} from '@expo/samples';

export default class NotesScreen extends React.Component {
    static navigationOptions = {
        title: 'Notes',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    This is the Notes screen
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
