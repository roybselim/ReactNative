import React from 'react';
import {createStore,applyMiddleware } from 'redux';
import pos from './redux/reducer';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import DetailsScreen from './components/details';
import { Provider } from 'react-redux';
import Config from './screens/config/config';
import Home from './screens/home/home';
import thunkMiddleware from 'redux-thunk';
import {fetchNSInv} from './redux/actions';

const store = createStore(pos,
  applyMiddleware(thunkMiddleware)
);

const MainNavigator = createStackNavigator({
  Home: Home,
  Details: DetailsScreen,
  Configuration: Config
},{
  initialRouteName: 'Home'
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component{
  public render(){
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }

  public componentDidMount(){
    store.dispatch(fetchNSInv())
  }
}