import {addSale, addItem} from '../redux/actions';
import types from '../redux/types';
import {IAction} from '../interfaces';

describe('actions', () => {
    it('should create an action to add a sales', () => {
        const data: string = 'Add Sale';
        const expectedAction: IAction = {
            type: types.ADD_SALE,
            data
        };
        expect(addSale(data)).toEqual(expectedAction);
    });
    it('should create an action to add an item', () => {
        const data: string = 'Add Item';
        const expectedAction: IAction = {
            type: types.ADD_ITEM,
            data
        };
        expect(addItem(data)).toEqual(expectedAction);
    });
});