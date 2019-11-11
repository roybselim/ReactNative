import React from 'react';
import HomeCtnr from './containers/home-cntr';

export default class Home extends React.Component<any,any>{
    public render(){
        return (
          	<HomeCtnr navigation={this.props.navigation}/>
        );
    }
}