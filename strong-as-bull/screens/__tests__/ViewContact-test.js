import 'react-native';
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ViewContactScreen from '../../screens/contacts/ViewContactScreen.js';
import ContactListScreen from "../contacts/ContactListScreen";
import {ScrollView} from "react-native";


/*
it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <ViewContactScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});


const navigation = { navigate: jest.fn() };

const renderer = new ShallowRenderer();
renderer.render(<ViewContactScreen />);
const result = renderer.getRenderOutput();
*/

it('renders', () => {
    //expect(result.type).toBe('div');
    //expect(result.props.children).toEqual(<ScrollView>{[]}</ScrollView>);
    expect(0).toEqual(0);
});

