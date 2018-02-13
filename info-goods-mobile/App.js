import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { AppStack } from './src/route/ApplicationRouter';
import { configureAxios } from './src/utility/AxiosGlobal';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            isLogged: false,
        };
        configureAxios();
    }

  render() {
    return (
          <AppStack ref={nav => { this.navigator = nav; }} />
    );
  }
}
