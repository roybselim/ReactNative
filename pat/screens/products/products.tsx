import React from 'react';
import ProductsCtnr from './containers/products-cntr';

export default class Products extends React.Component<any,any>{
    public render(){
        return (
          <ProductsCtnr navigation={this.props.navigation}/>
        )
    }
}
