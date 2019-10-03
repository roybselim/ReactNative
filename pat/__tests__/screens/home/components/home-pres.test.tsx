import React from 'react';
import {HomePres} from '../../../../screens/home/components/home-pres';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(<HomePres />).toJSON();
    expect(tree).toMatchSnapshot();
});