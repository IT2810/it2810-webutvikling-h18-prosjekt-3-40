import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, ListI} from "react-native";
import {ListItem, Left, Body, Thumbnail, Icon } from 'native-base';
import Swipeout from "react-native-swipeout";
import CreateContactComponent from "./CreateContactComponent";

export default class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            chosenOne: null,
        }
    }

    onAddContact(){
        console.log(this.props.val);
        console.log(this.state.chosenOne);
        this.props.addMethod(this.state.chosenOne);
    }

    onEditContact(){
        this.props.editMethod(this.state.chosenOne, this.props.keyval)
    }

    fireAddContact(newContact){
        console.log("HUZZAH:");
        console.log(newContact);
        //this.onAddContact();
    }

    fireEditContact(updatedContact){
        console.log("NEXT STEP:");
        console.log(updatedContact);
        //this.state.chosenOne = updatedContact;
        //this.onEditContact();
    }

    someFunction() {
        console.log('This is odd...');
    }

    render() {

        const swipeSettings = {
            autoClose: true,
            right: [
                {
                    onPress: () => {

                        this.props.navigation.navigate('CreateContact', {
                            contact: this.props.val,
                            key: this.props.keyval,
                            addMethod:  () => this.fireAddContact.bind(this),
                            editMethod: () => this.fireEditContact.bind(this),
                            someMethod: () => this.someFunction,

                        })
                    },
                    text: "Edit", type: 'edit',
                },
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: 'Yes', onPress: () =>(this.props.deleteMethod())}

                            ],
                                {cancelable: true}

                        );
                    },
                    text: "Delete", type: 'delete',
                }
            ],
        };


        return (
            <View key = {this.props.keyval}>
                <Swipeout {...swipeSettings}
                          key = {this.props.keyval}
                          style={styles.swipeOut}
                >

                    <ListItem key={this.props.keyval}
                              avatar button
                              onPress={()=>this.props.navigation.navigate('ViewContact', {contact:this.props.val}) }>

                        <Left >
                            <Thumbnail source={{ uri: this.props.val.image}} />
                        </Left>
                        <Body>
                            <Text style = {styles.name}> {this.props.val.first_name} {this.props.val.last_name}</Text>
                            <Text note style = {styles.phonenumber}>{this.props.val.phone_number} </Text>
                            <Text note style = {styles.company}>Company </Text>
                            <Text note style = {styles.email}>{this.props.val.email} </Text>
                        </Body>
                    </ListItem>
                </Swipeout>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    swipeOut: {
        backgroundColor: '#fff'
    }
});

