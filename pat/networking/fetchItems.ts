import {fetch} from 'cross-fetch';
import {IItem} from '../interfaces';

interface IFetchDataOptions {
    url: string;
    options: object;
    response_adapters: (data: any) => IItem[];
}

// export interface IItem {
//     id: string;
//     item: string;
//     cost: string;
// }

export const fetchItems = (options: IFetchDataOptions): Promise<any> => {
    return fetch(options.url, options.options).then((res: Response): any => {
        if(res.ok){
            return res.json().then(data => {
                return options.response_adapters(data);
            });
        } else {
            return Promise.reject();
        }
    });
}