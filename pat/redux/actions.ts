import {IAction, ISale} from '../interfaces';
import types from './types';

export const addSale = (data: any): IAction => {
    return {
        type: types.ADD_SALE,
        data
    };
}

export const addItem = (data: any): IAction => {
    return {
        type: types.ADD_ITEM,
        data
    };
}

export const delItem = (data: any): IAction => {
    return {
        type: types.DEL_ITEM,
        data
    };
}

export const editConfig = (data: any) => {
    return {
        type: types.EDIT_CONFIG,
        data
    };
}