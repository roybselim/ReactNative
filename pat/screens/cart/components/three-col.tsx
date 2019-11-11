import { View, Text, Button } from 'react-native';
import * as React from 'react';

interface IThreeColProps{
    one: string;
    two: any;
    three: any;
    remove?: () => void 
}

export default class ThreeCol extends React.Component<IThreeColProps>{
    render(){
        const {remove} = this.props
        return (
            <View style={{flexDirection: 'row'}}>
                {remove && <Button title="x" onPress={() => remove()}/>}
                <Text style={{width: '60%'}}>{this.props.one}</Text>
                <Text style={{flex: 1}}>{this.props.two}</Text>
                <Text>{this.props.three}</Text>
            </View>            
        )
    }
}