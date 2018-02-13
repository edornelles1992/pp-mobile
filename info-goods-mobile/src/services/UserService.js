import axios from 'axios';

const BASE = 'usuarios/';

const RESOURCES = {
    LOGIN: BASE + "login"
}

const PARAMS = {
    EMAIL: 'email',
    PASSWORD: 'senha',
};

export default class UserService {

    static getAccessAuthorization(email,senha){
        return axios.post(RESOURCES.LOGIN, {
                [PARAMS.EMAIL]: email,
                [PARAMS.PASSWORD]: senha,
        })
    }

    static getUser(authorization, email, password) {
        console.log(authorization);
        //TODO -> PASSAR O TOKEN PELA REQUISIçÃO JUNTO E BUSCAR OS DADOS DO USUARIO!
        //TODO -> VALIDAR NECESSIDADE DE PASSAR O NAVIGATION JUNTO
    }
}