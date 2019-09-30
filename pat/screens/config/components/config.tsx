import React from 'react';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    marginVertical: 16,
  },
});

class Config extends React.Component<any,any>{
    public render(){
        return (
          <Layout style={styles.container}>
            <Text style={styles.text} category='h4'>POS Configuration</Text>
            <Button onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>
          </Layout>
        )
    }
}

function mapStateToProps(state: any){
  return {
      config: state.config
  };
}

export default connect(mapStateToProps)(Config);