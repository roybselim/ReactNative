import React from 'react';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { Picker } from 'react-native';
import config_styles from '../styles/config-styles';
import * as defaults from '../defaults.json';

interface IConfigPresProps {
  navigation: any;
  config: any;
  onServerChange: any;
}

export class ConfigPres extends React.Component<IConfigPresProps,any>{
    public render(){
        const {config, onServerChange, navigation} = this.props;
        return (
          <Layout style={config_styles.container}>
            <Text style={config_styles.text} category='h4'>POS Configuration</Text>
            <Button onPress={() => navigation.navigate('Details')}>BUTTON</Button>

            <Text style={config_styles.text} >Back end ERP</Text>
            <Picker 
              selectedValue={(config && config.server) || ''}
              style={config_styles.picker}
              onValueChange={(itemValue, itemIndex) => onServerChange({server: itemValue})}
            >
              {
                defaults.server.map((item, index) => <Picker.Item key={index} label={item} value={item}/>)
              }
            </Picker>

            <Text style={config_styles.text} >Authentication</Text>
            <Picker 
              selectedValue={(config && config.auth) || ''}
              style={config_styles.picker}
              onValueChange={(itemValue, itemIndex) => onServerChange({auth: itemValue})}
            >
              {
                defaults.auth.map((item, index) => <Picker.Item key={index} label={item} value={item}/>)
              }
            </Picker>
          </Layout>
        )
    }
}