import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.textTitle}> Faça o Cadastro </Text>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {styles.text}> Cadastrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}