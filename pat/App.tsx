import React from 'react';
import { View,  Text } from 'react-native';
import {oauth1} from './authentication/oauth1';
import netsuite from './response_adapters/netsuite';
import {fetchItems} from './networking/fetchItems';
import {IItem} from './interfaces'
import {createStore} from 'redux';
import pos from './redux/reducer';
import RootComponent from './components/root';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DetailsScreen from './components/details';
import { Provider } from 'react-redux';
import Config from './screens/config/config';
import Home from './screens/home/home';

const store = createStore(pos);

interface IAppState {
  data: IItem[];
}

const MainNavigator = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
  Configuration: Config
},{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component<{},IAppState>{
  public constructor(props: any){
    super(props);
    this.state = {
      data: []
    }
  }
  
  public render(){
    const {data} = this.state
    console.log(data);
    return (
      <ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </ApplicationProvider>
    )
  }

  public componentDidMount(){
    this.getItems();
  }

  private getItems = () => {
    const request_data = {
      url: 'https://tstdrv710253.restlets.api.netsuite.com/app/site/hosting/restlet.nl?script=302&deploy=1',
      method: 'GET'
    };

    const authorization: string = oauth1({
      consumer: { 
        key: 'e72a3a3949e711e580633c78f8afcb274088861a5f9ed75da8429a82556c30ef', 
        secret: '45703c7930f154b52806a0ea6a1414e9974b4fb9019014d3db1e260d0fcf419b' 
      },
      realm: 'TSTDRV710253',
      token: {
        key: '5d261e6320cbd792924d03a689d480aca792bf7e0a8a1f03f0b404d1f6086879',
        secret: '4a9706919f06e8143e18b70d50678cef888e67adc96a25dfeeb58ad4f4224c21'
      },
      request_data: request_data
    })

    const reqHeaders = {
      'Content-Type': 'application/json',
      'Authorization': authorization 
    };

    fetchItems({
      url: request_data.url,
      options: {
        headers: reqHeaders,
        method: request_data.method
      },
      response_adapters: netsuite
    }).then(data => {
      this.setState({data});
    });
  }
}