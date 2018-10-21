import 'react-native';
import React from 'react';
import ContactListScreen from '../../screens/contacts/ContactListScreen.js';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ScrollView} from "react-native";

/*
it('function and state test care', () => {
    let listInstance = renderer.create(
        <ContactListScreen/>
    ).getInstance();

    listInstance.constructor();

    expect(listInstance.state.contacts.length).toEqual(0);
});
*/

const renderer = new ShallowRenderer();
renderer.render(<ContactListScreen />);
const result = renderer.getRenderOutput();


it('renders', () => {
    expect(result.type).toBe('div');
    expect(result.props.children).toEqual(<ScrollView>{[]}</ScrollView>);
});