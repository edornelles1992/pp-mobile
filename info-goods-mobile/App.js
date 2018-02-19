import React, { Component } from 'react';
import {View} from 'react-native';
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
            <View  style={{ flex: 1 }}>
                <AppStack ref={nav => { this.navigator = nav; }} />
            </View>
        );
    }
}
