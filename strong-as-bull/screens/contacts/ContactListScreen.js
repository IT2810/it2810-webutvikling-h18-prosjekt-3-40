import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, AsyncStorage, Alert} from "react-native";

import {Icon} from 'native-base';

import Contact from "../../components/Contacts/Contact.js";
import Swipeout from "react-native-swipeout";

export default class ContactListScreen extends React.Component {

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


    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
    }

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

        return (
            <ScrollView>
                {contacts}
            </ScrollView>

        );
    }

    addContact(newContact) {
        let newList = this.state.contacts;
        newList.push(newContact);
        this.setState({
            contacts: newList,
        });
        this.saveData();
    }


    editContact(newContact, key){
        let newList = this.state.contacts;
        newList[key] = newContact;
        this.setState({contacts: newList});
        this.saveData();
    }

    saveData() {
        let allContacts = JSON.stringify(this.state.contacts);
        AsyncStorage.setItem('allContacts', allContacts);
    };

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

