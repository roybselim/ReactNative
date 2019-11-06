import {IAction, ISale, IItem} from '../interfaces';
import types from './types';
import {oauth1} from '../authentication/oauth1';
import {fetchItems} from '../networking/fetchItems';
import netsuite from '../response_adapters/netsuite';
import NetInfo from "@react-native-community/netinfo";
import Database from '../database1';

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

export const rqstInv = () => {
    return {
        type: types.RQST_INVENTORY
    }
}

export const rcvInv = (data: any) => {
    return {
        type: types.RCV_INVENTORY,
        data
    }
}

export const fetchNSInv = (): any => {
    const db = new Database();

    return (dispatch: any) => {
        NetInfo.fetch().then(state => {
            if(state.isConnected){
                // Get inventory data.
                dispatch(rqstInv());

                const request_data = {
                    url: 'https://tstdrv710253.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=302&deploy=1',
                    method: 'GET'
                };
                
                const authorization: string = oauth1({
                    consumer: { 
                        key: 'e72a3a3949e711e580633c78f8afcb274088861a5f9ed75da8429a82556c30ef', 
                        secret: '45703c7930f154b52806a0ea6a1414e9974b4fb9019014d3db1e260d0fcf419b' 
                    },
                    realm: 'TSTDRV710253',
                    token: {
                        key: '5d261e6320cbd792924d03a689d480aca792bf7e0a8a1f03f0b404d1f6086879',
                        secret: '4a9706919f06e8143e18b70d50678cef888e67adc96a25dfeeb58ad4f4224c21'
                    },
                    request_data: request_data
                })
                
                const reqHeaders = {
                    'Content-Type': 'application/json',
                    'Authorization': authorization 
                };
                
                fetchItems({
                    url: request_data.url,
                    options: {
                        headers: reqHeaders,
                        method: request_data.method
                    },
                    response_adapters: netsuite
                }).then((data: IItem[]) => {
                    db.deleteTable().then(res => {
                        db.initDB().then(DB => {
                            data.forEach(item => db.addProduct(item).then(added => console.dir(added)))
                        })
                    })

                    dispatch(rcvInv(data));
                }).catch(error => console.dir(error));                
            } else {
                db.listProducts().then((value:IItem[]) => {
                    dispatch(rcvInv(value));
                })
            }
        }).catch(error => console.dir(error));
    }
}