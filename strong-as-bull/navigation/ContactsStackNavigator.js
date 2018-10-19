import ContactsScreen from "../screens/Contacts/ContactsScreen";
import ContactListScreen from "../screens/Contacts/ContactListScreen";
import CreateContactScreen from "../screens/Contacts/CreateContactScreen";
import ViewContactScreen from "../screens/Contacts/ViewContactScreen";

import React from 'react';
import {createStackNavigator} from 'react-navigation'



const ContactsStackNavigator = createStackNavigator({
    ContactList: ContactListScreen,
    CreateContact: CreateContactScreen,
    ViewContact: ViewContactScreen,
},{
        headerMode: 'float',
});

export default ContactsStackNavigator;