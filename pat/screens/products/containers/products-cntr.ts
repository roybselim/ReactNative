import { connect } from 'react-redux';
import { ProductsPres } from '../components/products-pres';
import {addToCart} from '../../../redux/actions';

const mapStateToProps = (state: any) => {
    return {items: state.items};
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onItemSelect: (id: any) => {
            dispatch(addToCart(id))
        }
    }
}

const ProductsCtnr = connect(mapStateToProps,mapDispatchToProps)(ProductsPres);

export default ProductsCtnr;