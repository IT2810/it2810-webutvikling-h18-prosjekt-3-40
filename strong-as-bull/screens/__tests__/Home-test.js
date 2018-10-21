import 'react-native';
import React from 'react';
import HomeScreen from '../../screens/HomeScreen.js';
import renderer from 'react-test-renderer';

it('CreateContact snapshot', () => {
    const snap = renderer.create(
        <HomeScreen/>
    ).toJSON();

    expect(snap).toMatchSnapshot();

});
