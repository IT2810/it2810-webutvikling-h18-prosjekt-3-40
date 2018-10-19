import React from 'react';
import {ScrollView, StyleSheet, Text, Button, TouchableOpacity, AsyncStorage} from "react-native";
import ContactList from '../../components/ContactList.js';
import userData from '../../components/mock_data.json';
import {Icon} from 'native-base';
import {MaterialCommunityIcons} from "../../components/ContactList";

export default class ContactsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contacts',
            headerRight: (
                <TouchableOpacity onPress={()=> navigation.navigate('CreateContact')}>
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
        return (
            <ScrollView style = {styles.scrollontainer}>
                    <ContactList
                        allContacts={this.state.contacts}
                        navigation={ this.props.navigation }
                        deleteContact={this.deleteContact}
                    />
                <TouchableOpacity onPress = { () => this.saveData(this.state.contacts)}>
                    <Text>Click me! </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {this.displayData.bind(this)}>
                    <Text> Now here to see! </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => this.deleteContact(2)}>
                    <Text> Delete first! </Text>
                </TouchableOpacity>


            </ScrollView>

        );
    }

    saveData(data) {
        let user = 'Jojo';
        AsyncStorage.setItem('user', user);
        let allContacts = JSON.stringify(data);
        AsyncStorage.setItem('allContacts', allContacts);
    };

    displayData = async () => {
        try {
            //let user = await AsyncStorage.getItem('user');
            let allcontacts = JSON.parse(await AsyncStorage.getItem('allContacts'));
            alert(allcontacts[0].first_name);
        } catch (error) {
            alert(error);
        }
    };

//Not necessary with get async? its safe
    deleteContact(contactId) {
        let allcontacts = this.state.contacts;
        let newList = allcontacts.filter(contact => contact.id !== contactId);
        console.log(allcontacts[0].id);
        console.log(newList[0].id);

        if (allcontacts.length === newList.length + 1){
            alert('Success');
            this.setState({
                contacts: newList,
            })
        } else {
            alert('Fail');
        }

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

