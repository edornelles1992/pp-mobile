import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {styles} from './Styles';
import UserService from '../../services/UserService';
import ValidationUtils from '../../utility/ValidationUtils';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            errorMessage: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.textTitle}>Faça o Login</Text>
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

                <Text style = {styles.textError}>{this.state.errorMessage}</Text>

                <View style = {styles.buttonContainer}>
                    <TouchableOpacity style = {styles.button} onPress = {() => this.doLogin()}>
                        <Text style = {styles.text}> Entrar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    /**
     * method to send the email and password to validate if exists user on database
     * return the user info's to be used through the application. if success navigate
     * to dashboard screen. if not return a info containing an error message.
     * @returns {Promise<void>}
     */
    async doLogin() {

        if (this.validateFields()) return;

        let result = await UserService.getAccessAuthorization(this.state.email,this.state.password);

        if (!!result.id) {
            this.setState({
                errorMessage : ''
            })
            //NAVEGAR PARA A DASHBOARD
        } else {
            if (result.status==401) { //acesso negado
                this.setState({
                    errorMessage : 'Usuário inexistente ou senha inválida.'
                })
            } else { // erro de conexão
                this.setState({
                    errorMessage : 'Erro inesperado. Tente novamente.'
                })
            }
        }
    }

    /**
     * validate if the fields was filled correctly. return true if have errors
     */
    validateFields() {

        if (!ValidationUtils.isEmail(this.state.email) || this.state.password.length < 6) {
            this.setState({
                errorMessage : 'Usuário inexistente ou senha inválida.'
            })
            return true;
        }
        return false
    }
}