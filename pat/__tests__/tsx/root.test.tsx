import RootComponent from '../../components/root';
import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';

describe('Testing root component', () => {
    it('Renders correctly', () => {
        renderer.create(<RootComponent />);
    });
});