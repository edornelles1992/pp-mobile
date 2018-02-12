import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import { AppStack } from './src/route/ApplicationRouter';

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isLogged: false,
        };
    }

  render() {
    return (
          <AppStack ref={nav => { this.navigator = nav; }} />
    );
  }
}
