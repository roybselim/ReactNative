import React from 'react';
import { Layout, Text, Button } from 'react-native-ui-kitten';
import { Picker } from 'react-native';
import config_styles from '../styles/config-styles';

export class ConfigPres extends React.Component<any,any>{
    public render(){
        const {config, onServerChange} = this.props;
        console.dir(config);
        return (
          <Layout style={config_styles.container}>
            <Text style={config_styles.text} category='h4'>POS Configuration</Text>
            <Button onPress={() => this.props.navigation.navigate('Details')}>BUTTON</Button>

            <Text style={config_styles.text} >Back end ERP</Text>
            <Picker 
              selectedValue={(config && config.server) || ''}
              style={{height: 50, width: 300}}
              onValueChange={(itemValue, itemIndex) => onServerChange({server: itemValue})}
            >
              <Picker.Item label="NetSuite" value="NetSuite" />
              <Picker.Item label="Odoo" value="Odoo" />
              <Picker.Item label="Quickbooks" value="Quickbooks" />
            </Picker>

            <Text style={config_styles.text} >Authentication</Text>
            <Picker 
              selectedValue={(config && config.auth) || ''}
              style={{height: 50, width: 300}}
              onValueChange={(itemValue, itemIndex) => onServerChange({auth: itemValue})}
            >
              <Picker.Item label="OAuth 1.0" value="OAuth 1.0" />
              <Picker.Item label="OAuth 2.0" value="OAuth 2.0" />
            </Picker>
          </Layout>
        )
    }
}