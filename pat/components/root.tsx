import React from 'react';
// import { View,  Text } from 'react-native';
import { Layout, Text, Button } from 'react-native-ui-kitten';

export default class RootComponent extends React.Component<{},{}>{
    public render(){
        return (
          <Layout>
            <Text category='h4'>Welcome to UI Kitten</Text>
            <Button>BUTTON</Button>
          </Layout>
        )
    }
}