import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { EvilIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import {DefaultColors} from "../../utility/GlobalStyles";
import {strings} from '../../assets/Strings';
import {StyleSheet} from "react-native";

/**
 * Componente class, used to create a card of a post or
 * a simple add Post card.
 * props that is needed to populate postCardInfo: (photo, itemName, name, likes, note)
 * prop that sign if is a AddNewPost ou a PostCardInfo: boolean isAddPost.
 */
export default class PostCard extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        if (!this.props.isAddPost) {
            return (
                <TouchableOpacity style={styles.cardContainer} onPress={() => this.goToDetailsProduct(this.props.item)}>
                    <Image height={30} resizeMode={'contain'} style={styles.image}
                           source={{uri: 'data:image/jpg;base64,' + this.props.photo}}/>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.cardTitle}>{this.props.itemName}</Text>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{this.props.name}</Text>
                        </View>
                        <View style={styles.noteAndLikeContainer}>
                            <View style={styles.likeContainer}>
                                <EvilIcons name="like" size={36} color={DefaultColors.lightBlue}/>
                                <Text style={styles.likes}>{this.props.likes}</Text>
                            </View>
                            <View style={styles.notaContainer}>
                                <FontAwesome name="star" size={26} color={DefaultColors.yellow}/>
                                <Text style={styles.nota}> {this.props.note}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity style={styles.newPostContainer} onPress={() => this.goToCreatePost()}>
                    <View style = {{ flex: 1 }}>
                        <Text style = {styles.addPostText}>{strings.labels.addPost}</Text>
                    </View>
                    <View style = {styles.addPostIcon}>
                        <Entypo name="plus" size={60} color={DefaultColors.white}/>
                    </View>
                </TouchableOpacity>
            );
        }
    }

    /**
     * method to navigate to this product if pressed.
     */
    goToDetailsProduct(item) {
        console.log("entrando na detalhes do produto")
    }

    /**
     * method to navigate to create post screen
     */
    goToCreatePost() {
        console.log('entrando na tela de criar postagem')
    }
}


export const styles = StyleSheet.create({

    newPostContainer: {
        backgroundColor: DefaultColors.lightGray,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 30,
        alignItems: 'center',
    },

    cardContainer: {
        paddingLeft: 5,
        flexDirection: 'row',
        marginBottom: 10,
        marginHorizontal: 30,
    },

    image: {
        width: 121,
        height: 87,
        borderRadius: 2,
        borderWidth: 1
    },

    descriptionContainer : {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: DefaultColors.lightGray,
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

    addPostText: {
        textAlign: 'center',
        fontSize: 20
    },

    addPostIcon: {
        flex: 0.4,
        backgroundColor: DefaultColors.lightBlue,
        alignItems: 'center',
        paddingVertical: 0
    }
});