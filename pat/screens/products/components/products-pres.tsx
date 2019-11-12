import React from 'react';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import styles from '../styles/products-styles';
import {IItem} from '../../../interfaces'

interface IProductsPresProps {
    navigation?: any;
    items?: IItem[];
    onItemSelect: (item: IItem) => void
}

export class ProductsPres extends React.Component<IProductsPresProps>{
    public render(){
        const {items, onItemSelect, navigation} = this.props;
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        items && items.map(item => 
                        <TouchableOpacity key={item.id} onPress={() => {
                            onItemSelect(item);
                            navigation.push('Item');
                        }}>
                            <View style={styles.items}>
                                <Text>{`${item.item}`}</Text>
                            </View>
                        </TouchableOpacity>)
                    }
                </View>
            </ScrollView>
        );
    }
}