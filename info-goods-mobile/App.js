import React, { Component } from 'react';
import {View, AsyncStorage} from 'react-native';
import { createRootNavigator } from './src/route/ApplicationRouter';
import { configureAxios } from './src/utility/AxiosGlobal';
import StorageUtils from "./src/utility/StorageUtils";

/**
 * class that is the entry-point of the application.
 * initiate the main router of navigation and configure
 * axios configs.
 */
export default class App extends Component {

    constructor() {
        super();
        this.state = {
            isLogged: false,
        };
        /**
         * configure axios with token if have a token
         * saved on Storage.
         */
        configureAxios(StorageUtils.getToken());
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
