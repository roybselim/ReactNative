import {fetch} from 'cross-fetch';

interface IFetchDataOptions {
    url: string;
    options: object;
    response_adapters: (data: any) => IItems[];
}

export interface IItems {
    id: string;
    item: string;
    cost: string;
}

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