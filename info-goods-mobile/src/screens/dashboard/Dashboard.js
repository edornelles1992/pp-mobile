import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import PostingService from '../../services/PostingService';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import {DefaultColors} from "../../utility/GlobalStyles";
import {strings} from '../../assets/Strings';
import PostCard from '../../components/postCard/PostCard';
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
                                <PostCard item = {item}
                                          photo = {item.produto.foto}
                                          name = {item.user.nome}
                                          itemName = {item.produto.nome}
                                          likes = {item.curtidas}
                                          note = {item.produto.nota}
                                          isAddPost = {false}/>
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

}