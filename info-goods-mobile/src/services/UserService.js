import axios from 'axios';
import sha512 from "js-sha512";

const BASE = 'usuarios/';

const RESOURCES = {
    LOGIN: BASE + "login",
    GETUSER: BASE + "usuario"
}

const PARAMS = {
    EMAIL: 'email',
    PASSWORD: 'senha',
};

export default class UserService {

    static getAccessAuthorization(email,password){

        password = sha512(password);

        return axios.post(RESOURCES.LOGIN, {
                [PARAMS.EMAIL]: email,
                [PARAMS.PASSWORD]: password,
        }).then(result => {
            return UserService.getUser(result.headers.authorization,email,password);
        }).catch(error => {
            //TODO -> VER COMO MOSTRAR MENSAGEM DE ERRO DE DADOS INSERIDOS
            console.log("Erro ao tentar logar");
            console.log(error);
            return "Falha ao tentar logar";
        })
    }

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
            console.log(result.data.content.user);
            return "Usuariou logou";
        //TODO -> GUARDAR OS DADOS DO USUARIO E NAVEGAR PARA A DASHBOARD
        }).catch(error => {
            console.log(error);
            return "Erro ao tentar logar";
        })


    }
}