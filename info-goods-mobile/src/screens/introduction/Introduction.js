import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Styles';

export default class Introduction extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.textTitle}> Bem-Vindo {"\n"}ao{"\n"} Info-Goods! </Text>
                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('Login') }>
                        <Text style = {styles.text}> Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.props.navigation.navigate('SignUp') }>
                        <Text style = {styles.text}> Cadastre-se </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

