import * as React from 'react';
import { View, Text } from 'react-native';
import { IItem } from '../../../interfaces';
import ThreeCol from './three-col';

interface ICartItemProps {
    item: any;
    count: number;
    handleRemove: (id: any) => void
}

export default class CartItem extends React.Component<ICartItemProps>{
    public remove(){
        const {handleRemove, item} = this.props
        handleRemove(item.id);
    }

    public render(){
        const {item, count} = this.props
        return (
            <ThreeCol one={item.item} two={count} three={count * parseInt(item.cost)} remove={this.remove.bind(this)}/>
        );
    }
} 