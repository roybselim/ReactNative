import {IState} from '../interfaces'

const initial: IState = {
	items: [],
	sales: [],
	cart: [],
	ui: {},
	meta: {},
	config: {},
	isFetching: false,
	selectedItem: {
		item: undefined,
		quantity: 0
	}
};

export default initial;