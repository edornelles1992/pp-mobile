import {StyleSheet} from "react-native";
import { DefaultColors } from '../../utility/GlobalStyles';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: DefaultColors.lightBlue,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTitle: {
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 20,
        fontSize: 35
    },

    text: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,

    },

    button: {
        borderRadius: 2,
        borderWidth: 1,
        marginVertical: 12
    },

    buttonContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 50
    },

    inputTextContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 40
    },

    inputText: {
        borderBottomWidth: 1,
        marginVertical: 4,
        padding: 4

    },

    labelInput: {
        marginTop: 10
    },

    errorMessage: {
        color: '#FFFFFF'
    }
});