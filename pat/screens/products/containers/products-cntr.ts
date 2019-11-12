import { connect } from 'react-redux';
import { ProductsPres } from '../components/products-pres';
import {addToCart, selectItem} from '../../../redux/actions';
import {IItem} from '../../../interfaces'

const mapStateToProps = (state: any) => {
    return {items: state.items};
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        // onItemSelect: (id: any) => {
        //     dispatch(addToCart(id))
        // }
        onItemSelect: (item: IItem) => {
            dispatch(selectItem(item));
        }
    }
}

const ProductsCtnr = connect(mapStateToProps,mapDispatchToProps)(ProductsPres);

export default ProductsCtnr;