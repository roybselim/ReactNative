export interface IAction {
    type: string;
    data?: any;
}

export interface ISale {
    id: number;
    quantity: number;
}

export interface IItem {
    id?: string;
    item: string;
    cost: string;
}

export interface ISelectedItem{
    item: any
    quantity: number
}

export interface IState {
    items: IItem[],
    sales: ISale[],
    cart: any[],
    ui: object,
    meta: object,
    config: object;
    isFetching: boolean;
    selectedItem: ISelectedItem
}

export interface IDbOptions {
    name?: string;
    version?: string;
    displayName?: string;
    size?: number;
}