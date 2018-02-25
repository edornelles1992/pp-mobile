import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';

import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import {DefaultColors} from "../../utility/GlobalStyles";
import {strings} from '../../assets/Strings';
import {StyleSheet} from "react-native";

/**
 * class of the Dashboard screen, show recent posts based
 * on theirs likes
 */
export default class PostCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <TouchableOpacity style={styles.cardContainer} onPress={() => this.goToDetailsProduct(item)}>
                <Image height={30} resizeMode={'contain'} style={styles.image}
                       source={{uri: 'data:image/jpg;base64,' + this.props.foto}}/>
                <View style={styles.descriptionContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.cardTitle}>{this.props.nome}</Text>
                    </View>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{this.props.nome}</Text>
                    </View>
                    <View style={styles.noteAndLikeContainer}>
                        <View style={styles.likeContainer}>
                            <EvilIcons name="like" size={36} color={DefaultColors.lightBlue}/>
                            <Text style={styles.likes}>{this.props.curtidas}</Text>
                        </View>
                        <View style={styles.notaContainer}>
                            <FontAwesome name="star" size={26} color={DefaultColors.yellow}/>
                            <Text style={styles.nota}> {this.props.nota}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}


export const styles = StyleSheet.create({

    cardContainer: {
        paddingLeft: 5,
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
        marginLeft: 25,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    nota : {
        fontSize: 16
    },

    likes : {
        fontSize: 16
    },

    likeContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0.5
    },

    notaContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flex: 0.5
    },
});