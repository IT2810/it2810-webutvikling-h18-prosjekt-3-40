import 'react-native';
import React from 'react';
import CreateNoteScreen from '../../screens/notes/CreateNoteScreen.js';
import renderer from 'react-test-renderer';
import CreateContactScreen from "../contacts/CreateContactScreen";

it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <CreateNoteScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});



it('test constructor and componentDidMount', () => {
    let instance = renderer.create(
        <CreateNoteScreen/>
    ).getInstance();

    let testState = {
        title: 'No title',
        description: '',
        note: null,
        key: null,
        chosenOne: null,
    };


    expect(instance.state).toEqual(testState);

});


