import React, { Component } from 'react';
import {View} from 'react-native';
import { createRootNavigator } from './src/route/ApplicationRouter';
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
        const Layout = createRootNavigator();
        return (
            <View  style={{ flex: 1 }}>
                <Layout ref={nav => { this.navigator = nav; }} />
            </View>
        );
    }
}
