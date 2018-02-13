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
}