import React from 'react';
import {StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation';
import Introduction from '../screens/introduction/Introduction';
import Login from '../screens/login/Login';
import SignUp from '../screens/register/SignUp';
import Dashboard from '../screens/dashboard/Dashboard';

/**
 * main navigator that contain all the stacks of the application
 * @returns {*}
 */
export const createRootNavigator = () => {
    return StackNavigator({
            SignedIn: {
                screen:  createSignedInStack(),
            },
            SignedOut: {
                screen: createSignedOutNavigator()
            }
        },
        {
            headerMode: 'none',
            initialRouteName: 'SignedOut'
        }
    )
};

/**
 * contain the initial route of the application (Introduction/SignUp/Login)
 * @returns {*}
 */
export const createSignedOutNavigator = () => {
    return StackNavigator({
        Introduction: {
            screen: ({navigation}) => {
                return (
                    <Introduction navigation = { navigation }/>
                );
            },
        },
        Login: {
            screen: ({navigation}) => {
                return (
                    <Login navigation = { navigation }/>
                );
            }
        },
        SignUp: {
            screen: ({navigation}) => {
                return (
                    <SignUp navigation = { navigation }/>
                );
            }
        }
    },{
        initialRouteName: 'Introduction',
        headerMode: 'none'
    }, {
        gestureEnabled: false
    })
};

/**
 * create the stack of signIn Route
 * @returns {*}
 */
export const createSignedInStack = () => {
    return StackNavigator({
        Main: {
            screen: createSignedInNavigator()
        }
    },{
        gestureEnabled: false
    })
};


/**
 * craete the tab routes of the signIn navigation
 * @returns {*}
 */
export const createSignedInNavigator = () => {
    return TabNavigator(
        {
             Dashboard : { screen: Dashboard ,  navigationOptions: { headerTitle: 'Info-Goods' }},
        },
        {
            tabBarOptions: {
                style: {
                    backgroundColor: 'red',
                    height: 55,
                    alignContent: 'center',
                    justifyContent: 'center',
                },
                showIcon: true,
                showLabel: false,
            },
            backBehavior: false,
            lazy: true,
            tabBarComponent: TabBarBottom,
            swipeEnabled: false,
            tabBarPosition: 'bottom',
            initialRouteName: 'Dashboard',
        }
    );
};