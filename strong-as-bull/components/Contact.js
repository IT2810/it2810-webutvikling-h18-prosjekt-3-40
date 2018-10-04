import React from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";



export default class Contact extends React.Component {

    //Prop er unchangable, State endres

    render() {
        return (
            <View>
                <Text> My name is {this.props.name} </Text>
                <Text> And my children are {this.props.children} </Text>
                <Text> {this.props.onClickAddContact("This is clicked asdf")} </Text>
            </View>
        )
    }

}

