import React from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/cart-styles';
import CartItem from './cart-item';
import {IItem} from '../../../interfaces';
import ThreeCol from './three-col';

interface ICartProps {
    navigation?: any;
    items: IItem[];
    cartItems: any[];
    handleRemove: (id: any) => void
}

export class CartPres extends React.Component<ICartProps>{
    public render(){
        const {items, cartItems, handleRemove} = this.props;
        let dispItems:any = {};
        cartItems.forEach(item => {
            if(dispItems[item] === undefined){
                dispItems[item] = 1;
            } else {
                dispItems[item] += 1;
            }
        });
        return(
            <ScrollView>
                <ThreeCol one="ITEM" two="Items" three="Total" />
                {
                    Object.keys(dispItems).map(key => {
                        const itm = items.find(s => s.id === key);
                        return <CartItem item={itm} count={dispItems[key]} handleRemove={handleRemove}/>
                    })
                }
            </ScrollView>
        )
    }
}