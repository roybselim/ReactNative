import { connect } from 'react-redux';
import { CartPres } from '../components/cart-pres';
import {removeFromCart} from '../../../redux/actions';

const mapStateToProps = (state: any) => {
    return {
        items: state.items,
        cartItems: state.cart
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        handleRemove: (id: any) => {
            dispatch(removeFromCart(id))
        }
    }
}

const CartCtnr = connect(mapStateToProps,mapDispatchToProps)(CartPres);

export default CartCtnr;