import ContactListScreen from "../screens/contacts/ContactListScreen";
import CreateContactScreen from "../screens/contacts/CreateContactScreen";
import ViewContactScreen from "../screens/contacts/ViewContactScreen";

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