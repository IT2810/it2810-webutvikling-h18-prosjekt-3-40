import React from 'react';
import {ScrollView, StyleSheet, Text, Button, TouchableOpacity, AsyncStorage} from "react-native";

import userData from '../../components/Contacts/mock_data.json';
import {Icon} from 'native-base';
import {MaterialCommunityIcons} from "../../components/Contacts/ContactList";

import Contact from "../../components/Contacts/Contact.js";

export default class ContactListScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contacts',
            headerRight: (
                <TouchableOpacity onPress={()=> navigation.navigate('CreateContact', {addMethod: this.addContact})}>
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
        this.setState({contacts: userData});
    }

    render() {

        let contacts = this.state.contacts.map((val, key) => {
            return <Contact
                key = {key}
                keyval = {key}
                val = {val}
                deleteMethod ={ () => this.deleteContact(key) }
                addMethod = { this.addContact.bind(this)}
                editMethod = { this.editContact.bind(this) }
                navigation={ this.props.navigation }
            />

        });

        return (
            <ScrollView>
                {contacts}
            </ScrollView>

        );
    }

    addContact(newContact) {
        console.log("HELLO");
        let newList = this.state.contacts;
        console.log(newList[1]);
        console.log(newContact);
        //newList.push(contact);
        //setstate(newlist)
    }


    editContact(newContact, key){
        console.log("HELLO");
        console.log(this.state.contacts[key]);
        console.log(newContact);
        //let newList = this.state.contacts;
        //newList[key] = contact;
        //setstate(newlist)
    }

    saveData() {
        let allContacts = JSON.stringify(this.state.contacts);
        AsyncStorage.setItem('allContacts', allContacts);
    };

    fetchData = async () => {
        try {
            //let user = await AsyncStorage.getItem('user');
            let allcontacts = JSON.parse(await AsyncStorage.getItem('allContacts'));
            this.setState({contacts: allcontacts});
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
    }
});

