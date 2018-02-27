import axios from 'axios';

const BASE = 'postagens/';

const RESOURCES = {
    GET_MOST_LIKEDS: BASE,
    GET_SEARCH_PRODUCT: BASE + 'produtos/'
}

const PARAMS = {
    SEARCH_TERM: 'searchTerm'
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

    /**
     * method to send the request to API to get the
     * response containing postings that have a product name
     * based on searchTerm
     * @param searchTerm
     * @returns {Promise<AxiosResponse<any>>}
     */
    static getPostsByTerm(searchTerm){
        return axios.get(RESOURCES.GET_SEARCH_PRODUCT, {
            params : {
                [PARAMS.SEARCH_TERM]: searchTerm,
            }
        }).then(result => {
            console.log(result)
            return result.data.content.postings;
        }).catch(error => {
            console.log(error)
            return null;
        });
    }
}

