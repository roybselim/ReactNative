import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../styles/home-styles';

interface IHomePresProps {
  navigation?: any;
  items?: any[];
}

export class HomePres extends React.Component<IHomePresProps>{
  public render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Welcome to UI Kitten</Text>
        <Button title={`Button`} onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
      </View>
    )
  }
}