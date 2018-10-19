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
