import React from 'react';
import {ScrollView, StyleSheet, Text, Button} from "react-native";
import ContactList from '../components/ContactList.js';
import userData from '../components/mock_data.json';
import {Icon} from 'native-base';
import {MaterialCommunityIcons} from "../components/ContactList";
import { createStackNavigator } from 'react-navigation';

export default class ContactsScreen extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Contacts',
            headerRight: (
                //<Button icon={{name: 'ios-add-outline'}} title='info' onPress={()=> alert('Hello world!')} color={'#000'} />
                <Icon name={'ios-add-outline'} onPress={()=> alert('Hello world!')} style={{ paddingRight:20 }} />
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            contacts: '',
        };
    }


    componentDidMount(){
        this.setState({contacts: userData});
    }

    render() {
        return (
            <ScrollView >
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
