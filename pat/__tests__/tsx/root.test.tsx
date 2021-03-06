import RootComponent from '../../components/root';
import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import {createStore} from 'redux';
import pos from '../../redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(pos);

it('renders correctly', () => {
    renderer.create(
        <Provider store={store}>
            <RootComponent />
        </Provider>
    );
});