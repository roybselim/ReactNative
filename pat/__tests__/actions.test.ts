import actions from '../redux/actions';
import types from '../redux/types';
import {IAction} from '../interfaces';

describe('actions', () => {
    it('should create an action to add a sales', () => {
        const text: string = 'Add Sales';
        const expectedAction: IAction = {
            type: types.ADD_SALE,
            text
        };
        expect(actions.addSale(text)).toEqual(expectedAction);
    });
});