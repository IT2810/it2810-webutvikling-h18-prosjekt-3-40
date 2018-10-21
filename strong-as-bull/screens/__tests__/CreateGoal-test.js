import 'react-native';
import React from 'react';
import CreateGoalScreen from '../goals/CreateGoalScreen.js';
import renderer from 'react-test-renderer';

import CreateContactScreen from "../contacts/CreateContactScreen";


it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <CreateGoalScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});



it('test constructor and componentDidMount', () => {
    let instance = renderer.create(
        <CreateContactScreen/>
    ).getInstance();

    let testState = {
        first_name: '',
        last_name: '',
        email: 'JohnApple@america.com',
        phone_umber: '99912345',
        company: 'Company',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        contact: null,
        key: null,
        chosenOne: null
    };

});

