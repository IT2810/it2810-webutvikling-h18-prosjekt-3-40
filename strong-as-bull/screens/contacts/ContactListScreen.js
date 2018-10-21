import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, AsyncStorage, Alert} from "react-native";

import {Icon} from 'native-base';

import Contact from "../../components/Contacts/Contact.js";
import Swipeout from "react-native-swipeout";

export default class ContactListScreen extends React.Component {


    //Sets options for navigation through header. Sends appropriate methods to "create new contact" screen
     static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contacts',
            headerRight: (
                <TouchableOpacity onPress={()=> {
                    navigation.navigate('CreateContact',{
                        addMethod: navigation.state.params.addMethod,
                        editMethod: navigation.state.params.editMethod,
                    });
                }}>
                    <Icon name={'ios-add-outline'} style={styles.newContactButton}/>
                </TouchableOpacity>

            ),
        };
    };

    //the constructor sets the contacts list to an empty list
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

    //Handles initial data loading. Also sends appropriate methods to the static navigatoroption.
    //This was necessary to be able to have the plus button in the header. This could have been solved
    //by simply adding a button anywhere else on the screen, but I liked the placement in the header
    componentDidMount(){
        //DUMMY DATA
        if (this.state.contacts === []){

            this.setState({contacts: initialData});
        } else {
            this.fetchData();
        }

        this.props.navigation.setParams ({
            addMethod: this.addContact.bind(this),
            editMethod: this.editContact.bind(this),
        })
    }



    render() {

        //This method creates the list of contacts via the map-function.
        //What catches the eye in this section is the settings for the swipeout component.
        //This location was chosen because the relevant methods and variables are readily availible (being the
        //add- and edit- method, the key and the value to each contact).
        let contacts = this.state.contacts.map((val, key) => {
            return <Swipeout{ ... {
                                    autoClose: true,
                                    right: [
                                        {
                                            onPress: () => {
                                                this.props.navigation.push('CreateContact', {
                                                    contact: val,
                                                    key: key,
                                                    addMethod: this.addContact.bind(this),
                                                    editMethod: this.editContact.bind(this),

                                                })
                                            },
                                            text: "Edit", type: 'edit',
                                        },
                                        {
                                            onPress: () => {
                                                Alert.alert(
                                                    'Alert',
                                                    'Are you sure you want to delete ' + val.first_name.toString() + "?",
                                                    [
                                                        {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                                        {text: 'Yes', onPress: () =>(this.deleteContact(key))}

                                                    ],
                                                    {cancelable: true}

                                                );
                                            },
                                            text: "Delete", type: 'delete',
                                        },

                                    ],

                                }
                            }
                            key = {key}
                            style={styles.swipeOut}>
                    <Contact
                    key = {key}
                    keyval = {key}
                    val = {val}
                    navigation={ this.props.navigation }
                    />
            </Swipeout>

        });

        //returns a scrollview with the aforementioned list of contacts, which was created over this
        return (
            <ScrollView>
                {contacts}
            </ScrollView>

        );
    }

    //Copies the contactlist from the state, pushes a new contact to the list, sets the new state and
    //Saves using AsyncStorage
    addContact(newContact) {
        let newList = this.state.contacts;
        newList.push(newContact);
        this.setState({
            contacts: newList,
        });
        this.saveData();
    }


    //Copies the contactlist from the state, edits one entry the list (based on the key), sets the new state and
    //Saves using AsyncStorage
    editContact(newContact, key){
        let newList = this.state.contacts;
        newList[key] = newContact;
        this.setState({
            contacts: newList,
        });
        this.saveData();
    }

    //Saves the current contactlist (as one list object) by stringifying it and saving it to AsyncStorage
    saveData() {
        let allContacts = JSON.stringify(this.state.contacts);
        AsyncStorage.setItem('allContacts', allContacts);
    };

    //Tries to fetch the contactlist from ASyncStorage. If there is no data (meaning nothing had been saved previously),
    //The method does nothing. This is so the list can easily be filled with mock data at first startup.
    //If there is data to be fetched, it fills the state:
    fetchData = async () => {
        try {
            let allcontacts = JSON.parse(await AsyncStorage.getItem('allContacts'));
            if (allcontacts != null) {
                this.setState({contacts: allcontacts});
            }
        } catch (error) {
            alert(error);
        }
    };


    //Copies the contactlist from the state, removes one item in the list (by key), sets the new state and
    //Saves using AsyncStorage
    deleteContact(key) {
        let newList = this.state.contacts;
        newList.splice(key, 1);
        this.setState({
            contacts: newList,
        });
        this.saveData();
    };


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    newContactButton: {
        marginRight: 20,
    },
    swipeOut: {
        backgroundColor: '#fff'
    },
});

