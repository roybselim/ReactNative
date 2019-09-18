import {IAction} from '../interfaces';
import types from './types';

const actions = {
    addSale: (text: string): IAction => {
        return {
            type: types.ADD_SALE,
            text
        };
    }
};

export default actions;