import React, {Component} from 'react';
import {Text, TouchableOpacity, View, TextInput, ScrollView} from 'react-native';
import {styles} from './Styles';
import {strings} from '../../assets/Strings';
import ValidationUtils from '../../utility/ValidationUtils';


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
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>{strings.labels.doSignUp}</Text>


                <ScrollView style={styles.inputTextContainer}>
                    <Text>{strings.labels.name}</Text>
                    <TextInput
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

                </ScrollView>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                                      onPress={() => this.doSignUp()}>
                        <Text style={styles.text}>{strings.labels.signUp}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    /***
     * Method to validate all the fields and
     * show error messages on incorrect filled fields
     */
    validateFields() {
        let message = ValidationUtils.validateFullName(this.state.name);
        if (message !== '') {
            this.setState({nameErrorMessage: message})
        } else {
            this.setState({nameErrorMessage: ''})
        }

        message = ValidationUtils.validateCity(this.state.city);
        if (message !== '') {
            this.setState({cityErrorMessage: message})
        } else {
            this.setState({cityErrorMessage: ''})
        }

        message = ValidationUtils.validateCountry(this.state.country);
        if (message !== '') {
            this.setState({countryErrorMessage: message})
        } else {
            this.setState({countryErrorMessage: ''})
        }

        message = ValidationUtils.validateEmail(this.state.email);
        if (message !== '') {
            this.setState({emailErrorMessage: message})
        } else {
            this.setState({emailErrorMessage: ''})
        }
        message = ValidationUtils.validateBirthdate(this.state.birthday);
        if (message !== '') {
            this.setState({birthdayErrorMessage: message})
        } else {
            this.setState({birthdayErrorMessage: ''})
        }

        message = ValidationUtils.validatePasswordString(this.state.password);
        if (message !== '') {
            this.setState({passwordErrorMessage: message})
        } else {
            this.setState({passwordErrorMessage: ''})
        }

        message = ValidationUtils.validatePasswordConfirmationString(this.state.password,this.state.confirmPassword);
        if (message !== '') {
            this.setState({confirmPasswordErrorMessage: message})
        } else {
            this.setState({confirmPasswordErrorMessage: ''})
        }
    }

    validateEmptyFields()
    {
        let message = ValidationUtils.validateEmpty(this.state.name);
        if (message !== '') {
            this.setState({emptyFieldName: message})
        } else {
            this.setState({emptyFieldName: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.city);
        if (message !== '') {
            this.setState({emptyFieldCity: message})
        } else {
            this.setState({emptyFieldCity: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.country);
        if (message !== '') {
            this.setState({emptyFieldCountry: message})
        } else {
            this.setState({emptyFieldCountry: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.email);
        if (message !== '') {
            this.setState({emptyFieldEmail: message})
        } else {
            this.setState({emptyFieldEmail: ''})
        }

        message = ValidationUtils.validateEmpty(this.state.birthday);
        if (message !== '') {
            this.setState({emptyFieldBirthday: message})
        } else {
            this.setState({emptyFieldBirthday: ''})
        }
    }

    /**
     * method to get the informations given by the user
     * on the fields and send the signUp requests.
     */
    doSignUp()
    {
        console.log("Fazendo cadastro...");
        this.validateEmptyFields();
        this.validateFields();

    }
}