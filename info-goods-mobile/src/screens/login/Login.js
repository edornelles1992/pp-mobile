import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {styles} from './Styles';
import UserService from '../../services/UserService';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.textTitle}> Faça o Login </Text>
                <View style = {styles.InputsContainer}>
                <TextInput  placeholder={"e-mail"}
                            underlineColorAndroid={'transparent'}
                            style = {styles.inputText}
                            onChangeText={ (text) => {
                                this.setState({
                                    email: text
                                })
                            }}
                />
                <TextInput  placeholder={"senha"}
                            underlineColorAndroid={'transparent'}
                            style = {styles.inputText}
                            secureTextEntry = {true}
                            onChangeText={ (text) => {
                                this.setState({
                                    password: text
                                })
                            }}
                />
                </View>

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.doLogin()}>
                        <Text style = {styles.text}> Entrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    async doLogin() {
       await UserService.getAccessAuthorization(this.state.email,this.state.password).then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })

    }
}