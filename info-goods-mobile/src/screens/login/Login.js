import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {styles} from './Styles';
import UserService from '../../services/UserService';
import ValidationUtils from '../../utility/ValidationUtils';
import { strings } from '../../assets/Strings';
import StorageUtils from "../../utility/StorageUtils";

/**
 * class of the Login screen
 */
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
                    <TextInput  placeholder={strings.labels.email}
                                underlineColorAndroid={'transparent'}
                                style = {styles.inputText}
                                onChangeText={ (text) => {
                                    this.setState({
                                        email: text
                                    })
                                }}
                    />
                    <TextInput  placeholder={strings.labels.password}
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
                <View style = {{ marginVertical: 10}}>
                    <Text style = {styles.textError}>{this.state.errorMessage}</Text>
                </View>
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
     //       let aa = await StorageUtils.getToken(); TESTE DE RETORNO DO TOKEN NO STORAGE

        } else {
            if (result.status==401) { //acesso negado
                this.setState({
                    errorMessage : strings.errors.noUserFoundOrInvalidPassword
                })
            } else { // erro de conexão
                this.setState({
                    errorMessage : strings.errors.genericError
                })
            }
        }
    }

    /**
     * validate if the fields was filled correctly. return true if have errors
     * and show message error to user.
     */
    validateFields() {

        if (!ValidationUtils.isEmail(this.state.email) || this.state.password.length < 6) {
            this.setState({
                errorMessage : strings.errors.noUserFoundOrInvalidPassword
            })
            return true;
        }
        return false
    }
}