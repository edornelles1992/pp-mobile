import React, {Component} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
import PostingService from '../../services/PostingService';
import { EvilIcons, FontAwesome } from '@expo/vector-icons';
import {DefaultColors} from "../../utility/GlobalStyles";
import {strings} from '../../assets/Strings';
import SearchBar from 'react-native-material-design-searchbar';
import PostCard from "../../components/postCard/PostCard";
/**
 * class of the SearchProduct screen, allow the user
 * to seacrh fort posts on a specific product.
 */
export default class SearchProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            postings: [],
            topMessage: strings.labels.searchForPostAboutProduct,
            bottomMessage: strings.labels.beFirstToPost
        };

    }

    render() {

        return (
            <View style = {styles.mainContainer}>
                <SearchBar
                    onSearchChange={(text) => this.findProduct(text)}
                    height={50}
                    onFocus={() => console.log('On Focus')}
                    onBlur={() => console.log('On Blur')}
                    autoCorrect={false}
                    padding={5}
                    placeholder={strings.labels.informProductName}
                />
                <View style = {styles.topTextContainer}>
                    <Text style = {styles.textTopMessage}>{this.state.topMessage}</Text>
                </View>
                <View style = {styles.resultContainer}>
                    {this.renderList()}
                </View>
                <View style = {styles.bottomTextContainer}>
                    <Text style = {styles.textBottomMessage}>{this.state.bottomMessage}</Text>
                </View>
                <PostCard isAddPost = {true}/>
            </View>
        );
    }

    /**
     * method to call the service that find the products
     * that contain the given text catched in the SearchBar
     * on the product name.
     * @param text
     * @returns {Promise<void>}
     */
    async findProduct(text) {

        if(text.length === 0) return;

        let postings = await PostingService.getPostsByTerm(text);
        console.log(postings);
        this.setState({
            postings: postings
        })
    }

    /**
     * method to render the list with the found posts
     * or a message to inform user that no posts was founded.
     * @returns {*}
     */
    renderList() {
        if (!!this.state.postings && (this.state.postings !== [] || this.state.postings.length > 0)) {

            return (
                <FlatList
                    keyboardShouldPersistTaps={'always'}
                    data={this.state.postings}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <PostCard item={item}
                                  photo={item.produto.foto}
                                  name={item.user.nome}
                                  itemName={item.produto.nome}
                                  likes={item.curtidas}
                                  note={item.produto.nota}
                                  isAddPost={false}/>
                    )}
                />
            );
        } else {
            return (
                <Text style={styles.noPostFoundText}>{strings.errors.noPostWasFound}</Text>
            );
        }
    }
}