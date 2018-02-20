import axios from 'axios';
import sha512 from "js-sha512";
import StorageUtils from '../utility/StorageUtils';

const BASE = 'usuarios/';

const RESOURCES = {
    LOGIN: BASE + "login",
    GETUSER: BASE + "usuario",
    SIGNUP: BASE + "sign-up"
}

const PARAMS = {
    EMAIL: 'email',
    PASSWORD: 'senha',
};

/**
 *  class containing all the requests to back-end related
 *  to User services.
 */
export default class UserService {

    /**
     * method that cryptography the given password
     * and send the requests with the given password and email.
     * if requests was succeeded, return a token access.
     * @param email
     * @param password
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getAccessAuthorization(email,password){

        password = sha512(password);

        return axios.post(RESOURCES.LOGIN, {
                [PARAMS.EMAIL]: email,
                [PARAMS.PASSWORD]: password,
        }).then(async result => {
            StorageUtils.saveToken(result.headers.authorization);

            return UserService.getUser(result.headers.authorization,email,password);
        }).catch(error => {
            //TODO -> VER COMO MOSTRAR MENSAGEM DE ERRO DE DADOS INSERIDOS
            console.log("Erro ao tentar logar");
            console.log(error);
            if (!!error.response)
                return error.response.data;
            return error
        })
    }

    /**
     * method to get user infos on database with the
     * given email, password and security token.
     * @param authorization
     * @param email
     * @param password
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getUser(authorization, email, password) {
        const configRequest = {
            url: RESOURCES.GETUSER,
            method: 'POST',
            headers: {
                'Authorization': authorization
            },
            params: {
                [PARAMS.EMAIL]: email,
                [PARAMS.PASSWORD]: password,
            },
        }

       return axios(configRequest).then(result => {
            return result.data.content.user;
        //TODO -> GUARDAR OS DADOS DO USUARIO E NAVEGAR PARA A DASHBOARD
        }).catch(error => {
            console.log(error);
            return error.response.data;
        })


    }

    /**
     * method to sent a user register request to back-end
     * return a message containing if was sucessfully created or not.
     * @param name
     * @param city
     * @param country
     * @param email
     * @param birthday
     * @param password
     * @returns {Promise<AxiosResponse<any>>}
     */
    static sendRegister(name, city, country, email, birthday , password){
        birthday =  birthday.split("/").join("-");
        password = sha512(password);

        const configRequest = {
            url: RESOURCES.SIGNUP,
            method: 'POST',
            data: {
                nome: name,
                cidade: city,
                estado: country,
                email: email,
                dataNascimento: birthday,
                senha: password,
            },
        };

        return axios(configRequest).then(result => {
            return result.data.messages;
        }).catch(error => {
            console.log(error);
            return false;
        })
    }
}