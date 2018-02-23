import {StyleSheet} from "react-native";
import { DefaultColors } from '../../utility/GlobalStyles';

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1 ,
        backgroundColor: DefaultColors.white
    },

    title: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 22
    },

    cardContainer: {
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 30,
        borderRadius: 2,
        borderWidth: 1
    },

    image: {
        width: 121,
        height: 87
    },

    descriptionContainer : {
        flex: 1,
        flexDirection: 'column'
    },

    cardTitle: {
        textAlign: 'center',
        fontSize: 16
    },

    titleContainer : {
        alignContent: 'center',
        alignSelf: 'stretch',
        marginVertical: 5
    },

    nameContainer : {
        alignContent: 'center',
        alignSelf: 'stretch',
    },

    name : {
        textAlign: 'center',
    },

    noteAndLikeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    nota : {
        textAlign: 'center'
    },

    likes : {
        textAlign: 'center'
    },

    likeContainer: {
        flex: 0.5
    },

    notaContainer: {
        flex: 0.5
    }
});