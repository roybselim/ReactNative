import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
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

    SQLite.openDatabase({
        name: "TestDatabase",
        location: "default"
    }).then((db) => {
        console.log("Database open!");
    });
  }

  public render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Welcome to UI Kitten</Text>
        <Button title="details" onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
      </View>
    )
  }
}

function mapStateToProps(state: any){
  return state;
}

export default connect(mapStateToProps)(RootComponent);