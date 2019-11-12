import types from './types';
import {IAction, IItem, ISale, ISelectedItem} from '../interfaces';
import {combineReducers} from 'redux';

function ui(state: object = {}, action: IAction): any {
    switch(action.type){
        case types.ADD_UI:
            return Object.assign({}, state, action.data)
        default: return state;
    }
}

function meta(state: object = {}, action: IAction): any {
    switch(action.type){
        case types.ADD_META:
            return Object.assign({}, state, action.data)
        default: return state;
    }
}

function config(state: object = {}, action: IAction): any {
    switch(action.type){
        case types.EDIT_CONFIG:
            return Object.assign({}, state, action.data)
        default: return state;
    }
}

function items(state: IItem[] = [], action: IAction): any{
    switch(action.type){
        case types.ADD_ITEM:
            return [
                ...state,
                action.data
            ]   
        case types.RCV_INVENTORY:
            return action.data;
        default: return state;
    }    
}

function cart(state: any[] = [], action: any): any{
    switch(action.type){
        case types.ADD_TO_CART:
            return [
                ...state,
                action.id
            ]  
        case types.REMOVE_FROM_CART:
            const remItem = state.findIndex(itm => itm === action.id);
            return remItem === -1 ? state: state.filter((itm, ndx) => ndx !== remItem);
        default: return state;
    }    
}

function sales(state: ISale[] = [], action: IAction): any{
    switch(action.type){
        case types.ADD_SALE:
            return [
                ...state,
                action.data
            ]        
        default: return state;
    }
}

function isFetching(state: boolean = false, action: IAction) {
    switch(action.type){
        case types.RQST_INVENTORY:
            return true;
        case types.RCV_INVENTORY:
            return false;
        default: return state;
    }
}

function selectedItem(state: ISelectedItem = {item: undefined, quantity: 0}, action: any){
    switch(action.type){
        case types.CHANGE_QUANTITY:
            return Object.assign({}, state, 
                {
                    quantity: action.ops === '+' ? state.quantity + 1 : state.quantity - 1
                }
            )
        case types.SELECT_ITEM:
            return Object.assign({}, state, {item: action.item, quantity: 1})
        default: return state;   
    }
}

const pos = combineReducers({
    items,
    sales,
    cart,
    ui, 
    meta,
    config,
    isFetching,
    selectedItem
})

export default pos;