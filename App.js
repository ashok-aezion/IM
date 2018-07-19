import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './app/reducer/reducer';
import Login from './app/component/Login';
import Register from './app/component/Register';
import CurrentDate from './app/component/CurrentDate';
import Home from './app/component/Home';


const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));
const tabNav = TabNavigator({
  Home: {
      screen: Home
  },
  CurrentDate: {
    screen: CurrentDate
}

}, {
      tabBarOptions: {
          activeTintColor: '#222',
          
      },
      headerMode: 'none',
          navigationOptions: {
            headerVisible: false,
          }
});
const Stack = StackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Main: {
    screen: tabNav
  }
},{ headerMode: 'screen' });

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});