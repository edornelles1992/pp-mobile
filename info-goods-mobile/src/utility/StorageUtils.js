import { AsyncStorage } from 'react-native';

/**
 * class that have methods that save datas on storage of device.
 */
export default class StorageUtils {

    static TOKEN = '@InfoGoods:authorizationtoken';

    static saveToken = async (token) => {
        await AsyncStorage.setItem(StorageUtils.TOKEN, token);
    }

    static getToken = async () => {
        try {
            const value = await AsyncStorage.getItem(StorageUtils.TOKEN);
            return value;
        } catch (error) {
            console.log(error);
            return null
        }
    }
}