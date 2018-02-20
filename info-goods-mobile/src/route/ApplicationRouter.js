import React from 'react';
import { StackNavigator } from 'react-navigation';
import Introduction from '../screens/introduction/Introduction';
import Login from '../screens/login/Login';
import SignUp from '../screens/register/SignUp';

/**
 * main navigator that contain all the stacks of the application
 * @returns {*}
 */
export const createRootNavigator = () => {
    return StackNavigator({
            SignedIn: {
                //FIX CRIAR STACK DAS TELAS APOS LOGADO
                screen:  createSignedOutNavigator()
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
}


