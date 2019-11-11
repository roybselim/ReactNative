import React from 'react';
import CartCtnr from './containers/cart-cntr';

export default class Cart extends React.Component<any,any>{
    public render(){
        return (
          <CartCtnr navigation={this.props.navigation}/>
        )
    }
}
