import { connect } from 'react-redux';
import { ItemPres } from '../components/item-pres';
import {changeQuantity, addToCart} from '../../../redux/actions';

const mapStateToProps = (state: any) => {
    return {selectedItem: state.selectedItem};
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onChangeQuantity: (ops: string) => {
            dispatch(changeQuantity(ops));
        },
        onAddToCart: (id: any, quantity: number) => {
            for(let i = 0; i < quantity; i++){
                dispatch(addToCart(id));
            }
        }
    }
}

const ItemCtnr = connect(mapStateToProps,mapDispatchToProps)(ItemPres);

export default ItemCtnr;