import React, { Component } from 'react';
import { compact, isEmpty, replace, split, trim } from 'lodash';

/**
 * The purpose of this utility is provide methods that check inputs.
 */
export default class ValidationUtils {

    static IS_EMPTY_ERROR_MESSAGE = 'Este campo não pode estar vazio.';
    static IS_NON_FULL_NAME_ERROR_MESSAGE = 'Este nome é inválido.';
    static IS_NON_COUNTRY = 'Esta cidade é inválida.';
    static IS_NON_CITY = 'Esta cidade é inválida.';
    static IS_NON_BIRTHDATE = 'Data de nascimento inválida.';
    static IS_NON_EMAIL = 'Este email é inválido.';
    static IS_NON_PASSWORD_STRING = 'A senha deve ter no minimo 6 caracteres.'
    static IS_NON_PASSWORD_CONFIRMATION_STRING = 'As senhas informadas não conferem.'

    /**
     * Check if input is empty and return the error message if true
     *
     * @param value
     * @param errorMessage
     * @returns {string}
     */
    static validateEmpty(value, errorMessage = ValidationUtils.IS_EMPTY_ERROR_MESSAGE) {
        if (isEmpty(value)) return errorMessage;
        return '';
    }

    /**
     * Check if input is a full name. The full name must be composed by two names and 4 letters at least
     *
     * @param value
     * @returns {boolean}
     */
    static isFullName(value = '') {
        return ((trim(value).length > 4) && (compact(split(value, ' ')).length > 1))
    }

    /**
     * Check if input is a full name and return the error message if false
     *
     * @param value
     * @param errorMessage
     * @returns {string}
     */
    static validateFullName(value = '', errorMessage = ValidationUtils.IS_NON_FULL_NAME_ERROR_MESSAGE) {
        if (!!value) {
            if (!ValidationUtils.isFullName(value)) {
                return errorMessage;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    /**
     * validate if Country name have at least 3 characters, return message if not
     * @param value
     * @param errorMessage
     * @returns {string}
     */
    static validateCountry(value, errorMessage = ValidationUtils.IS_NON_COUNTRY){
        if (!!value) {
            if (value.length <= 2) {
                return errorMessage;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    /**
     * validate if City name gave at least 3 characters, return message if not
     * @param value
     * @param errorMessage
     * @returns {string}
     */
    static validateCity(value, errorMessage = ValidationUtils.IS_NON_CITY){
        if (!!value) {
            if (value.length <= 2) {
                return errorMessage;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    /**
     * Check if input is a valid e-mail.
     * @param value
     * @returns {boolean}
     */
    static isEmail = (value = '') => {
        const EMAIL_PATTERN = /\S+@\S+\.\S+/;
        return EMAIL_PATTERN.test(value)
    }

    /**
     * Check if input is a valid e-mail and return the error message if false
     * @param value
     * @param errorMessage
     * @returns {string}
     */
    static validateEmail(value = '', errorMessage = ValidationUtils.IS_NON_EMAIL) {
        if (!!value) {
            if (!ValidationUtils.isEmail(value)) {
                return errorMessage;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }

    /**
     * Check if input is a valid password string and return the error message if false
     * @param {*} value
     * @param {*} errorMessage
     * @returns {string}
     */
    static validatePasswordString(value = '', errorMessage = ValidationUtils.IS_NON_PASSWORD_STRING) {
        if (value.length < 6) {
            return errorMessage
        }
        return '';
    }

    /**
     *
     * @param {*} value
     * @param {*} valueConfirmation
     * @param {*} errorMessage
     * @returns {string}
     */
    static validatePasswordConfirmationString(value = '', valueConfirmation = '', errorMessage = ValidationUtils.IS_NON_PASSWORD_STRING) {
        if (valueConfirmation.length < 6) {
            return errorMessage
        }
        if (value != valueConfirmation) {
            return ValidationUtils.IS_NON_PASSWORD_CONFIRMATION_STRING
        }

        return '';
    }

    /**
     * Tests if birthdate is valid
     *
     * @param value
     * @returns {boolean}
     */
    static isBirthdate(value = '') {
        const opera1 = split(value, '/');
        lopera1 = opera1.length;

        let pdate;
        if (lopera1 > 1) {
            pdate = split(value, '/');
        } else return false;

        const dd = parseInt(pdate[0]);
        const mm = parseInt(pdate[1]);
        const yy = parseInt(pdate[2]);

        if (dd > 31 || mm > 12 || yy > (new Date()).getFullYear()) return false
        else return true
    }

    /**
     * Check if input is a valid birthdate and return the error message if false
     *
     * @param value
     * @param errorMessage
     * @returns {string}
     */
    static validateBirthdate(value = '', errorMessage = ValidationUtils.IS_NON_BIRTHDATE) {
        if (!!value) {
            if (!ValidationUtils.isBirthdate(value)) {
                return errorMessage;
            } else {
                return '';
            }
        } else {
            return '';
        }
    }
}