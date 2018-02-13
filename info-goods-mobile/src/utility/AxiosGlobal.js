import Axios from 'axios';

const SERVER_URLS = {
    EDUARDO: 'http://192.168.100.9:8080/api/',

};


const BASE_URL = SERVER_URLS.EDUARDO

export const configureAxios = (AUTH_TOKEN) => {
    Axios.defaults.baseURL = BASE_URL;
    if (AUTH_TOKEN)
        Axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    Axios.defaults.headers.post['Content-Type'] = 'application/json';
};;