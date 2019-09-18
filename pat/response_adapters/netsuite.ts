import {IItem} from '../interfaces';

const netsuite = (data: any): IItem[] => {
    return JSON.parse(data).data.map((item: any) => {
        return {
            id: item.internalid,
            cost: item.cost,
            item: item.itemid
        };
    });
}

export default netsuite