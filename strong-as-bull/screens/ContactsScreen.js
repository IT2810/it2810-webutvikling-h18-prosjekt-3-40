import React from 'react';
import {ScrollView, StyleSheet, Text} from "react-native";
import Contact from '../components/Contact.js';

export default class ContactsScreen extends React.Component {

    static navigationOptions = {
        title: 'Contacts',
    };

    constructor(props) {
        super(props);
        this.onClickAddContact = this.onClickAddContact.bind(this);
    }

    onClickAddContact(asdf) {
        return asdf;
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>
                    This is the Contacts screen
                </Text>
                <Contact name={"Bob Bob"} onClickAddContact={this.onClickAddContact}>
                    contact1
                    contact2
                </Contact>
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
