import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import NotesScreen from '../screens/NotesScreen';

import ContactsStackNavigator from "./ContactsStackNavigator";
import GoalsStackNavigator from "./GoalsStackNavigation";
import NotesStackNavigator from "./NotesStackNavigator";


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const NotesStack = createStackNavigator({
  Notes: NotesStackNavigator,
},{
    headerMode: 'none',
});

NotesStack.navigationOptions = {
  tabBarLabel: 'Notes',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list-box${focused ? '' : '-outline'}` : 'md-list-box'}
    />
  ),
};

const ContactsStack = createStackNavigator({
    Contacts: ContactsStackNavigator,
    //CreateContact: CreateContactScreen,
},{
    headerMode: 'none',
});

ContactsStack.navigationOptions = {
  tabBarLabel: 'Contacts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contacts${focused ? '' : '-outline'}` : 'md-contacts'}
    />
  ),
};

const GoalsStack = createStackNavigator({
    Goals: GoalsStackNavigator,
},{
    headerMode: 'none',
});

GoalsStack.navigationOptions = {
    tabBarLabel: 'Goals',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-checkbox${focused ? '' : '-outline'}` : 'md-checkbox'}
        />
    ),
};

export default createBottomTabNavigator({
  HomeStack,
  NotesStack,
  ContactsStack,
  GoalsStack,
});
