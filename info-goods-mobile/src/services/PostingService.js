import axios from 'axios';

const BASE = 'postagens/';

const RESOURCES = {
    GET_MOST_LIKEDS: BASE,
}

const PARAMS = {

};

/**
 *  class containing all the requests to back-end related
 *  to Postings services.
 */
export default class PostingService {


    /**
     * method to send the request to API to get the data
     * containing the most liked posts on data
     * @returns {Promise<AxiosResponse<any> | void>}
     */
    static getMostLikedPosts(){
        return axios.get(RESOURCES.GET_MOST_LIKEDS).then(result => {
            return result.data.content.postings;
        }).catch(error => {
            console.log(error)
            return null;
        });
    }
}

