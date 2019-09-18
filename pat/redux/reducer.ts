import initial from './initial';
import types from './types';
import {IAction} from '../interfaces';
import {combineReducers} from 'redux';

function ui(state: any = {}, action: IAction): any {
    switch(action.type){
        case types.ADD_UI:
            return Object.assign({}, state, action.data)
        default: return state;
    }
}

function meta(state: any = {}, action: IAction): any {
    switch(action.type){
        case types.ADD_META:
            return Object.assign({}, state, action.data)
        default: return state;
    }
}

function items(state: any[] = [], action: IAction): any{
    switch(action.type){
        case types.ADD_ITEM:
            return [
                ...state,
                action.data
            ]        
        default: return state;
    }    
}

function sales(state: any[] = [], action: IAction): any{
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
    meta
})

export default pos;