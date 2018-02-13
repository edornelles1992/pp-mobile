import React from 'react';
import { StackNavigator, HeaderBackButton } from 'react-navigation';
import Introduction from '../screens/introduction/Introduction';
import Login from '../screens/login/Login';
import SignUp from '../screens/register/SignUp';

export const AppStack = StackNavigator({
    App: {
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
    initialRouteName: 'App',
    headerMode: 'none'
});
