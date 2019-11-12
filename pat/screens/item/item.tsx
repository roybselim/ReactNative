import React from 'react';
import ItemCtnr from './containers/item-cntr';

export default class Item extends React.Component<any,any>{
    public render(){
        return (
          <ItemCtnr navigation={this.props.navigation}/>
        )
    }
}
