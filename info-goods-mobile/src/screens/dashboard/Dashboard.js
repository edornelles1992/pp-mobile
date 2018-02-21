import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {styles} from './Styles';
/**
 * class of the Login screen
 */
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style = {{flex: 1 ,backgroundColor: 'green'}}>
                <Text>AQUI E DASHBOARD</Text>
            </View>
        );
    }

}