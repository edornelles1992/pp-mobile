import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput, ScrollView} from 'react-native';
import {styles} from './Styles';
import {strings} from '../../assets/Strings';
import ValidationUtils from '../../utility/ValidationUtils';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import  UserService  from '../../services/UserService';
import PModal from '../../components/modal/PModal';


export default class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            city: '',
            country: '',
            email: '',
            birthday: '',
            password: '',
            confirmPassword: '',
            nameErrorMessage: '',
            cityErrorMessage: '',
            countryErrorMessage: '',
            emailErrorMessage: '',
            birthdayErrorMessage: '',
            passwordErrorMessage: '',
            confirmPasswordErrorMessage: '',
            emptyFieldName: '',
            emptyFieldCity: '',
            emptyFieldCountry: '',
            emptyFieldEmail: '',
            emptyFieldBirthday: '',
            emptyFieldPassword: '',
            emptyFieldConfirmPassword: '',
            showModal: false,
            messageModal: '',
            pageToNavigate: '',
            nameField: null,
            cityField: null,
            countryField: null,
            emailField: null,
            birthdayField: null,
            passwordField: null,
            confirmPasswordField: null,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>{strings.labels.doSignUp}</Text>


                <KeyboardAwareScrollView style={styles.inputTextContainer}>
                    <Text>{strings.labels.name}</Text>
                    <TextInput
                        ref={input => { this.state.nameField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        onChangeText={(text) => {
                            this.setState({
                                name: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.nameErrorMessage}{this.state.emptyFieldName}</Text>

                    <Text style={styles.labelInput}>{strings.labels.city}</Text>
                    <TextInput
                        ref={input => { this.state.cityField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        onChangeText={(text) => {
                            this.setState({
                                city: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.cityErrorMessage}{this.state.emptyFieldCity}</Text>

                    <Text style={styles.labelInput}>{strings.labels.country}</Text>
                    <TextInput
                        ref={input => { this.state.countryField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        onChangeText={(text) => {
                            this.setState({
                                country: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.countryErrorMessage}{this.state.emptyFieldCountry}</Text>

                    <Text style={styles.labelInput}>{strings.labels.email}</Text>
                    <TextInput
                        ref={input => { this.state.emailField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        onChangeText={(text) => {
                            this.setState({
                                email: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.emailErrorMessage}{this.state.emptyFieldEmail}</Text>

                    <Text style={styles.labelInput}>{strings.labels.birthday}</Text>
                    <TextInput
                        ref={input => { this.state.birthdayField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        onChangeText={(text) => {
                            this.setState({
                                birthday: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.birthdayErrorMessage}{this.state.emptyFieldBirthday}</Text>

                    <Text style={styles.labelInput}>{strings.labels.password}</Text>
                    <TextInput
                        ref={input => { this.state.passwordField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                password: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.passwordErrorMessage}{this.state.emptyFieldPassword}</Text>

                    <Text style={styles.labelInput}>{strings.labels.confirmPassword}</Text>
                    <TextInput
                        ref={input => { this.state.confirmPasswordField = input }}
                        underlineColorAndroid={'transparent'}
                        style={styles.inputText}
                        secureTextEntry={true}
                        onChangeText={(text) => {
                            this.setState({
                                confirmPassword: text
                            })
                        }}
                    />
                    <Text style={styles.errorMessage}>{this.state.confirmPasswordErrorMessage}{this.state.emptyFieldConfirmPassword}</Text>

                </KeyboardAwareScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => this.doSignUp()}>
                        <Text style={styles.text}>{strings.labels.signUp}</Text>
                    </TouchableOpacity>
                </View>
                <PModal showModal={this.state.showModal} text={this.state.messageModal} navigation={this.props.navigation} pageToNavigate={this.state.pageToNavigate}/>
            </View>
        );
    }

    /***
     * Method to validate all the fields and
     * show error messages on incorrect filled fields
     */
    validateFields() {
        let success = true;

        let message = ValidationUtils.validateFullName(this.state.name);
        if (message !== '') {
            this.setState({nameErrorMessage: message})
            success = false;
        } else {
            this.setState({nameErrorMessage: ''})
        }

        message = ValidationUtils.validateCity(this.state.city);
        if (message !== '') {
            this.setState({cityErrorMessage: message})
            success = false;
        } else {
            this.setState({cityErrorMessage: ''})
        }

        message = ValidationUtils.validateCountry(this.state.country);
        if (message !== '') {
            this.setState({countryErrorMessage: message})
            success = false;
        } else {
            this.setState({countryErrorMessage: ''})
        }

        message = ValidationUtils.validateEmail(this.state.email);
        if (message !== '') {
            this.setState({emailErrorMessage: message})
            success = false;
        } else {
            this.setState({emailErrorMessage: ''})
        }
        message = ValidationUtils.validateBirthdate(this.state.birthday);
        if (message !== '') {
            this.setState({birthdayErrorMessage: message})
            success = false;
        } else {
            this.setState({birthdayErrorMessage: ''})
        }

        message = ValidationUtils.validatePasswordString(this.state.password);
        if (message !== '') {
            this.setState({passwordErrorMessage: message})
            success = false;
        } else {
            this.setState({passwordErrorMessage: ''})
        }

        message = ValidationUtils.validatePasswordConfirmationString(this.state.password,this.state.confirmPassword);
        if (message !== '') {
            this.setState({confirmPasswordErrorMessage: message})
            success = false;
        } else {
            this.setState({confirmPasswordErrorMessage: ''})
        }

        return success;
    }

    validateEmptyFields()
    {
        let success = true;

        let message = ValidationUtils.validateEmpty(this.state.name);
        if (message !== '') {
            this.setState({emptyFieldName: message})
            success = false;
        } else {
            this.setState({emptyFieldName: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.city);
        if (message !== '') {
            this.setState({emptyFieldCity: message})
            success = false;
        } else {
            this.setState({emptyFieldCity: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.country);
        if (message !== '') {
            this.setState({emptyFieldCountry: message})
            success = false;
        } else {
            this.setState({emptyFieldCountry: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.email);
        if (message !== '') {
            this.setState({emptyFieldEmail: message})
            success = false;
        } else {
            this.setState({emptyFieldEmail: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.birthday);
        if (message !== '') {
            this.setState({emptyFieldBirthday: message})
            success = false;
        } else {
            this.setState({emptyFieldBirthday: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.password);
        if (message !== '') {
            this.setState({emptyFieldPassword: message})
            success = false;
        } else {
            this.setState({emptyFieldPassword: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.confirmPassword);
        if (message !== '') {
            this.setState({emptyFieldConfirmPassword: message})
            success = false;
        } else {
            this.setState({emptyFieldConfirmPassword: ''})
        }

        return success;
    }

    /**
     * method to get the informations given by the user
     * on the fields and send the signUp requests.
     */
    async doSignUp()
    {
        if (this.validateEmptyFields() && this.validateFields())
        {
            console.log("Fazendo cadastro...");
            let message =  await UserService.sendRegister(
                this.state.name,
                this.state.city,
                this.state.country,
                this.state.email,
                this.state.birthday,
                this.state.password,
                this.state.confirmPassword
            );

            if (message == false){
                this.setState({
                    showModal: true,
                    messageModal: 'Erro inesperado. Tente novamente.',
                    pageToNavigate: ''
                });
            } else {

                if (message[0].code === 'A002') { //case return success message
                this.setState({
                    showModal: true,
                    messageModal: message[0].message,
                    pageToNavigate: 'Login'
                });
                this.clearFields();
                } else {
                    this.setState({
                        showModal: true,
                        messageModal: message[0].message,
                        pageToNavigate: ''
                    });
                }
            }
        } else {
            this.setState({
                showModal: false,
                pageToNavigate: ''
            });
            console.log("Erro nos dados...");
        }
    }

    /**
     * method to clear the fields by
     * resetting the value of the states of the class.
     */
    clearFields() {
        this.setState({
            name: '',
            city: '',
            country: '',
            email: '',
            birthday: '',
            password: '',
            confirmPassword: '',
            nameErrorMessage: '',
            cityErrorMessage: '',
            countryErrorMessage: '',
            emailErrorMessage: '',
            birthdayErrorMessage: '',
            passwordErrorMessage: '',
            confirmPasswordErrorMessage: '',
            emptyFieldName: '',
            emptyFieldCity: '',
            emptyFieldCountry: '',
            emptyFieldEmail: '',
            emptyFieldBirthday: '',
            emptyFieldPassword: '',
            emptyFieldConfirmPassword: '',
        });

        this.state.nameField.clear();
        this.state.cityField.clear();
        this.state.countryField.clear();
        this.state.emailField.clear();
        this.state.birthdayField.clear();
        this.state.passwordField.clear();
        this.state.confirmPasswordField.clear()
    }
}