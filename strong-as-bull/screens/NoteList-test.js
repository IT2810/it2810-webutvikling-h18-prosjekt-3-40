import 'react-native';
import React from 'react';
import NoteListScreen from '../screens/notes/NoteListScreen.js';
import renderer from 'react-test-renderer';

it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <NoteListScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});
