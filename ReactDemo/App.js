/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './App/components/employee/login.js';
import EmployeeList from './App/components/employee/list';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import allReducers from './App/reducers';
import reduxthunk from 'redux-thunk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppStack = StackNavigator({

  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    }
  },
  EmployeeList:{
    screen: EmployeeList,
    navigationOptions:{
      title: 'Create Route',
      headerRight: null,
      headerStyle: {
        backgroundColor: '#4764cc'
      },
      headerTintColor: '#fff',
    }
  },
},

{
  initialRouteName: 'Login',
});

const store = createStore(allReducers, compose(applyMiddleware(reduxthunk)));

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {

    super(props);
    this.state =  {
    };
    console.disableYellowBox = true;
  } 

  render() {
    return (
      
      <Provider store={store}>
        <View style={styles.container}>
          <AppStack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
