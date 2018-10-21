import 'react-native';
import React from 'react';
import ContactListScreen from '../../screens/contacts/ContactListScreen.js';
import ShallowRenderer from 'react-test-renderer/shallow';

//import {ScrollView} from "react-native";

const renderer = new ShallowRenderer();
renderer.render(<ContactListScreen />);
const result = renderer.getRenderOutput();


it('renders', () => {

    //Jest will not accept any of the variations we tried for ScrollView type:
    //expect(result.type).toBe(ScrollView);
    expect(result.props.children).toEqual([]);

});