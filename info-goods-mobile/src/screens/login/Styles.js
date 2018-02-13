import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textTitle: {
        textAlign: 'center',
        margin: 20,
        fontSize: 35
    },

    text: {
        textAlign: 'center',
        padding: 10,
        fontSize: 20,

    },

    inputText: {
        borderRadius: 6,
        borderWidth: 1,
        marginVertical: 12,
        textAlign: 'center',
        padding: 10
    },

    button: {
        borderRadius: 2,
        borderWidth: 1,
        marginVertical: 12,
        textAlign: 'center'
    },

    buttonContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 50
    },

    InputsContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 50
    }
});