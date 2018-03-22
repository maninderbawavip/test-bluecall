import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-vector-icons';

import MyApi from '../lib';
import styles from '../styles';

class Search extends React.Component {
    static navigationOptions = {
        title: 'Flicker Photos',
    };

    constructor(props) {
        super(props)
        this.state = {
            text: "",
            page: 1,
            per_page: 20,
            results: []
        };
    }

    searchPhotos(text) {
        const { page, per_page } = this.state;
        console.log('triggered first request', page);
        MyApi.searchPhotos(text, page, per_page)
            .then(data => {
                this.setState({ results: data.photo, page: page + 1, text });
            }).catch((err) => {
                console.log(err);
            })
        console.log(this.state);
    }

    searchNextPage = () => {
        const { page, per_page, text } = this.state;
        console.log('triggered next request', page);
        MyApi.searchPhotos(text, page, per_page)
            .then(data => {
                this.setState({ results: [...new Set([...this.state.results ,...data.photo])], page: page + 1 });
                console.log(data.page);
            }).catch((err) => {
                console.log(err);
            })
    }

    renderImage({ item, index }) {
        let image_url = item.url_l ? item.url_l : 'https://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg';
        return (
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { ...item, image_url })} >
                <View style={styles.row}>
                    <Image style={styles.thumb} source={{ uri: image_url }} />
                    <View style={styles.textBlock}>
                        <Text> Title: {item.title.substring(0,25)} </Text>
                        <Text> Owner: {item.ownername} </Text>
                        <Text> Id: {item.id} </Text>
                    </View>
                </View>
            </TouchableOpacity>

        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput
                        style={styles.inputText}
                        placeholder={'Search flickr for images...'}
                        returnKeyType='search'
                        onChangeText={((text) => this.searchPhotos(text))}
                    />
                </View>
                <FlatList
                    style={{ flex: 1 }}
                    data={this.state.results}
                    renderItem={this.renderImage.bind(this)}
                    extraData={this.state.results}
                    onEndReached={this.searchNextPage}
                    onEndReachedThreshold={0}
                    keyExtractor={(item, index) => (`${item.farm}${item.server}${item.id}_${item.secret}`)}
                />
            </View>
        );
    }
}

export default Search;
