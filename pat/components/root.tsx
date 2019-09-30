import React from 'react';
// import { View,  Text } from 'react-native';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import SQLite from "react-native-sqlite-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 16,
  },
});
class RootComponent extends React.Component<any,any>{
  public componentDidMount(){
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);

    // console.log(SQLite);

    SQLite.openDatabase({
        name: "TestDatabase",
        location: "default"
    }).then((db) => {
        console.log("Database open!");
    });
  }

  public render(){
    return (
      <Layout style={styles.container}>
        <Text style={styles.text} category='h4'>Welcome to UI Kitten</Text>
        <Button onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
      </Layout>
    )
  }
}

function mapStateToProps(state: any){
  return state;
}

export default connect(mapStateToProps)(RootComponent);