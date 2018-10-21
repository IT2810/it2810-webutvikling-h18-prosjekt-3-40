import React from 'react';

import {View, Text, StyleSheet } from 'react-native';

export default class ViewNoteScreen extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            note: this.props.navigation.state.params.note,
        };
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {this.state.note.title}
                </Text>
                <Text style={styles.info}>
                    {this.state.note.description}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 50,
    },
    title: {
        padding: 10,
        fontSize: 35,
        justifyContent: 'center',
        textAlign: 'center',
    },
    info: {
        textAlign: 'center',
        fontSize: 20,
        padding: 10,
    },
});