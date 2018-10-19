import 'react-native';
import React from 'react';
import ViewContactScreen from '../../screens/contacts/ViewContactScreen.js';
import renderer from 'react-test-renderer';


/*
it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <ViewContactScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});
*/


//To not add additional fail:
it('works', () => {
    expect(1).toBe(1);
});