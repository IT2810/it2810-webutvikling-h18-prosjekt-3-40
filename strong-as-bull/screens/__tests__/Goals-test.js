import 'react-native';
import React from 'react';
import GoalsScreen from '../goals/GoalsScreen.js';
import renderer from 'react-test-renderer';

it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <GoalsScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});
