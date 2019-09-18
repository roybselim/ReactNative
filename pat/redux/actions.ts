import {IAction, ISale} from '../interfaces';
import types from './types';

export const addSale = (data: ISale): IAction => {
    return {
        type: types.ADD_SALE,
        data
    };
}

export const addItem = (data: any): IAction => {
    return {
        type: types.ADD_ITEM,
        data
    }
}