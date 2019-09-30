import Config from '../../screens/config/components/config';
import renderer from 'react-test-renderer';
import 'react-native';
import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import {createStore} from 'redux';
import pos from '../../redux/reducer';
import { Provider } from 'react-redux';

const store = createStore(pos);

it('renders correctly', () => {
    renderer.create(
        <ApplicationProvider
            mapping={mapping}
            theme={lightTheme}>
                <Provider store={store}>
                    <Config />
                </Provider>
        </ApplicationProvider>
    );
});