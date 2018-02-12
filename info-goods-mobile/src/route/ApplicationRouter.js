import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, HeaderBackButton } from 'react-navigation';

export const AppStack = StackNavigator({
    App: {
        screen: ({navigation}) => {
            return (
                <View style={styles.container}>
                    <Text style={{ textAlign: 'center', margin: 20 }}>  </Text>
                </View>
            );
        }
    },
    // SignInStack: {
    //     screen: SignInStackNavigator.default()
    // },
    // SignUpStack: {
    //     screen: SignUpStackNavigator.default()
    // },
    // ChangeData: {
    //     screen: ChangeDataScreen
    // }
}, {
    initialRouteName: 'App',
    headerMode: 'none'
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
