import 'react-native';
import React from 'react';
import Pedometer from '../../components/Pedometer'
import renderer from 'react-test-renderer'

it('Pedometer Snapshot test', () => {

    let snap = renderer.create(<Pedometer/>).toJSON();

    expect(snap).toMatchSnapshot();
});
