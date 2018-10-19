import 'react-native';
import React from 'react';
import CreateNoteScreen from '../../screens/notes/CreateNoteScreen.js';
import renderer from 'react-test-renderer';

it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <CreateNoteScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});
