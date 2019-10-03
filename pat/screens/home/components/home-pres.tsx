import React from 'react';
// import { Layout, Text, Button } from 'react-native-ui-kitten';
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

  // public render(){
  //   return (
  //     <Layout style={styles.container}>
  //       <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
  //       <Button onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
  //     </Layout>
  //   )
  // }

  public render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Welcome to UI Kitten</Text>
        <Button title={`Button`} onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
      </View>
    )
  }
}