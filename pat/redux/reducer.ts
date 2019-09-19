import types from './types';
import {IAction, IItem, ISale} from '../interfaces';
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
        case types.ADD_CONFIG:
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

const pos = combineReducers({
    items,
    sales,
    ui, 
    meta,
    config
})

export default pos;