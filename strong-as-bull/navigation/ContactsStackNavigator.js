import ContactsScreen from "../screens/Contacts/ContactsScreen";
import CreateContactScreen from "../screens/Contacts/CreateContactScreen";

import React from 'react';
import {createStackNavigator} from 'react-navigation'
import ViewContactScreen from "../screens/Contacts/ViewContactScreen";


const ContactsStackNavigator = createStackNavigator({
    Contacts: ContactsScreen,
    CreateContact: CreateContactScreen,
    ViewContact: ViewContactScreen,
},{
        headerMode: 'float',
});

export default ContactsStackNavigator;