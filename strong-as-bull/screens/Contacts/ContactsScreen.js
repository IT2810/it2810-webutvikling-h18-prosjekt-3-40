import React from 'react';
import {ScrollView, StyleSheet, Text, Button, TouchableOpacity} from "react-native";
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
                        navigation={ this.props.navigation }
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
    newContactButton: {
        marginRight: 20,
    }
});

