import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {ListItem, Left, Body, Thumbnail } from 'native-base';

export default class Note extends React.Component {
//Render how a note is viewed
    render() {
        return (
            <View key = {this.props.keyval}>
                <ListItem key={this.props.keyval}
                          onPress={()=> this.props.navigation.navigate('ViewNote', {note: this.props.val}) }>
                    <Body>
                    <Text style = {styles.title}>
                        {this.props.val.title === undefined ? 'No title' : this.props.val.title}
                    </Text>
                    <Text note style = {styles.description}> {this.props.val.description} </Text>
                    </Body>
                </ListItem>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    title: {
        fontSize: 35,
        justifyContent: 'center',
        textAlign: 'center',
        paddingBottom: 30,
    },
    description: {
        fontSize: 20,
        padding: 20,
        backgroundColor: "#eee",
        borderRadius: 10,
    },
});

