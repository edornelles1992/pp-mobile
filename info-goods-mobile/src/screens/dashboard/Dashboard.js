import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import PostingService from '../../services/PostingService';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import {DefaultColors} from "../../utility/GlobalStyles";
import {strings} from '../../assets/Strings';
/**
 * class of the Dashboard screen, show recent posts based
 * on theirs likes
 */
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postings: [],
            errorDataMessage: ''
        };

        this.fetchHotPosts();
    }

    render() {

        if (this.state.postings === []) {
            return (
                <View style={styles.mainContainer}/>
            );
        } else {
            return (
                <View style={styles.mainContainer}>
                    <Text style={styles.title}>{strings.labels.hotTitle}</Text>
                    <FlatList
                        keyboardShouldPersistTaps={'always'}
                        data={this.state.postings}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity style = {styles.cardContainer} onPress = {() => this.goToDetailsProduct(item)}>
                                <Image height = {30} resizeMode = {'contain'} style={styles.image} source={{ uri: 'data:image/jpg;base64,' + item.produto.foto}}/>
                                <View style = { styles.descriptionContainer}>
                                    <View style = { styles.titleContainer}>
                                        <Text style = { styles.cardTitle }>{item.produto.nome}</Text>
                                    </View>
                                    <View style = { styles.nameContainer }>
                                        <Text style = { styles.name }>{item.user.nome}</Text>
                                    </View>
                                    <View style = { styles.noteAndLikeContainer }>
                                        <View style = { styles.likeContainer}>
                                            <EvilIcons name="like" size={36} color={DefaultColors.lightBlue} />
                                            <Text style = { styles.likes }>{item.curtidas}</Text>
                                        </View>
                                        <View style = { styles.notaContainer}>
                                            <FontAwesome name="star" size={26} color={DefaultColors.yellow} />
                                            <Text style = { styles.nota }> {item.produto.nota}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            );
        }
    }

    /**
     * method to find the post with most likes calling
     * the method getMostLikedPosts on PostingService class.
     */
    async fetchHotPosts() {
       let postList =  await PostingService.getMostLikedPosts();
            console.log(postList);
       if(postList === null){
           this.setState({
               errorDataMessage : 'Não foi possivel buscar as postagens.'
           })
       } else {
           this.setState({
               postings : postList,
               errorDataMessage : ''
           })
       }
    }

    /**
     * method to navigate to selected product.
     */
    goToDetailsProduct(item) {
        console.log("entrando na detalhes do produto")
    }
}