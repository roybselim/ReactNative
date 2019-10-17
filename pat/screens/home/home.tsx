import React from 'react';
import HomeCtnr from './containers/home-cntr';

export default class Config extends React.Component<any,any>{
    public render(){
        return (
          <HomeCtnr navigation={this.props.navigation}/>
        )
    }
}