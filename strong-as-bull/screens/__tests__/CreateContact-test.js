import 'react-native';
import React from 'react';
import CreateContactScreen from '../../screens/contacts/CreateContactScreen.js';
import renderer from 'react-test-renderer';


it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <CreateContactScreen/>
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
        phone_number: '99912345',
        company: 'Company',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
        contact: null,
        key: null,
        chosenOne: null
    };

    expect(instance.state).toEqual(testState);

});

