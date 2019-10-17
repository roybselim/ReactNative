import React from 'react';
import { View, Text, Button } from 'react-native';
import SQLite from "react-native-sqlite-storage";
import styles from '../styles/home-styles';

interface IHomePresProps {
  navigation?: any;
}

export class HomePres extends React.Component<IHomePresProps>{
  public componentDidMount(){
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    SQLite.openDatabase({
        name: "TestDatabase",
        location: "default"
    }).then((db) => {
        console.log("Database open!");
    });
  }

  public render(){
    console.dir(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Welcome to UI Kitten</Text>
        <Button title={`Button`} onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
      </View>
    )
  }
}