import React from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/item-styles';
import {ISelectedItem} from '../../../interfaces';

interface IItemPresProps {
    navigation?: any;
    selectedItem: ISelectedItem;
    onChangeQuantity: (ops: string) => void;
    onAddToCart: (id: any, quantity: number) => void
}

export class ItemPres extends React.Component<IItemPresProps>{
    public render(){
        const {selectedItem, onChangeQuantity, onAddToCart} = this.props;
        return (
            <ScrollView>
                <View style={{flexDirection: 'row'}}>
                    <Text>{selectedItem.item.item}</Text>
                    <Button title={`-`} onPress={() => 
                        onChangeQuantity('-')}
                    />                    
                    <Text>{selectedItem.quantity}</Text>
                    <Button title={`+`} onPress={() => 
                        onChangeQuantity('+')}
                    />
                    <Text>{selectedItem.quantity * parseInt(selectedItem.item.cost)}</Text>    
                </View>
                <View style={{flex: 0, flexDirection: 'row'}}>
                    <Button title={`Add to cart`} onPress={() => 
                        onAddToCart(selectedItem.item.id, selectedItem.quantity)}
                    />
                </View>
            </ScrollView>
        );
    }
}