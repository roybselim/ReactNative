import {IItems} from '../networking/fetchItems';

const netsuite = (data: any): IItems[] => {
    return JSON.parse(data).data.map((item: any) => {
        return {
            id: item.internalid,
            cost: item.cost,
            item: item.itemid
        };
    });
}

export default netsuite