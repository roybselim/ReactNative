import pos from '../../redux/reducer';
import initial from '../../redux/initial';
import types from '../../redux/types';
import { IAction } from '../../interfaces';

const initialAction: IAction = {
    type: types.ADD_SALE,
    data: {}
}

const testSaleData = {
    id: 1,
    quantity: 1,
    meta: {}
}

const testItemData = {
    id: "1",
    cost: "50.00",
    item: "Item 1"
}

const addSaleAction: IAction = {
    type: types.ADD_SALE,
    data: testSaleData
}

const addItemAction: IAction = {
    type: types.ADD_ITEM,
    data: testItemData
}

describe('POS Reducer', () => {
    // Test initial loading
    it('should return the initial state', () => {
        expect(pos(undefined, {type: 'Test Initial'})).toEqual(initial);
    });

    // Test adding of a sale item.
    it('should add a sale item', () => {
        expect(pos(initial, addSaleAction).sales).toEqual([
            testSaleData
        ]);
    });

    // Test adding an item
    it('should add an item', () => {
        expect(pos(initial, addItemAction).items).toEqual([
            testItemData
        ]);
    });

    // Test adding a ui item.
    it('should add a ui', () => {
        expect(pos(initial, {type: 'Add UI', data: {name: 'Roy Selim'}}).ui).toEqual({
            name: 'Roy Selim'
        });
    });

    // Test adding a meta item.
    it('should add a meta item', () => {
        expect(pos(initial, {type: 'Add Meta', data: {name: 'Roy Selim'}}).meta).toEqual({
            name: 'Roy Selim'
        });
    });
});