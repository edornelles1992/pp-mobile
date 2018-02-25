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

        };

    }

    render() {
        return (
            <View style = {styles.mainContainer}>
                <SearchBar
                    onSearchChange={() => this.findProduct()}
                    height={50}
                    onFocus={() => console.log('On Focus')}
                    onBlur={() => console.log('On Blur')}
                    placeholder={'Search...'}
                    autoCorrect={false}
                    padding={5}
                    returnKeyType={'search'}
                    placeholder={'Informe o nome do produto...'}
                />
            <View style = {styles.resultContainer}>
                <PostCard isAddPost = {true}/>
            </View>
            </View>
        );
    }


    findProduct() {
        console.log('procurando pelas postagens do produto')
    }
}