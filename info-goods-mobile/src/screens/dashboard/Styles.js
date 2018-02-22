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
    }
});