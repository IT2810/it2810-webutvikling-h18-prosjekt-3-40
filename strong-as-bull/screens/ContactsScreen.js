import React from 'react';
import {ScrollView, StyleSheet, Text} from "react-native";
import ContactList from '../components/ContactList.js';
import userData from '../components/mock_data.json';

export default class ContactsScreen extends React.Component {

    static navigationOptions = {
        title: 'Contacts',
    };

    constructor(props) {
        super(props);
        //this.onClickAddContact = this.onClickAddContact.bind(this);
        this.state = {
            contacts: '',
        };
    }


    componentDidMount(){
        this.setState({contacts: userData.contacts});
    }

    onClickAddContact(asdf) {
        return asdf;
    }

    render() {
        console.log(this.state.contacts);
        return (
            <ScrollView>
                <ContactList

                    allContacts={this.state.contacts}
                />
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
