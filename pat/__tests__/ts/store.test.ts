import {createStore} from 'redux';
import pos from '../../redux/reducer';
import initial from '../../redux/initial';
import {addItem, addSale} from '../../redux/actions';

describe('Testing Redux Store', () => {
    const store = createStore(pos);

    it('store getstate should create the initial state', () => {
        expect(store.getState()).toEqual(initial);
    });
});