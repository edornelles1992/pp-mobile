import {StyleSheet} from "react-native";
import { DefaultColors } from '../../utility/GlobalStyles';

export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: DefaultColors.white,
    },

    resultContainer: {
        backgroundColor: DefaultColors.lightGray,
        flex: 1 ,
    },

    topTextContainer : {
        marginHorizontal: 40,
        marginBottom: 10
    },

    textTopMessage: {
        textAlign: 'center',
        fontSize: 16
    },

    bottomTextContainer: {
        marginHorizontal: 40,
        marginVertical: 10
    },

    textBottomMessage: {
        textAlign: 'center',
        fontSize: 16
    },

    noPostFoundText: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 130
    }
});