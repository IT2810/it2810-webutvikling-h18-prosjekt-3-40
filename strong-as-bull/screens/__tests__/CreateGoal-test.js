import 'react-native';
import React from 'react';
import CreateGoalScreen from '../goals/CreateGoalScreen.js';
import renderer from 'react-test-renderer';

it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <CreateGoalScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});
