export interface IAction {
    type: string;
    data?: any;
}

export interface ISale {
    id: number;
    quantity: number;
}

export interface IItem {
    id: string;
    item: string;
    cost: string;
}