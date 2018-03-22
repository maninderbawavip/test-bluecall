import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from '../styles';

class DetailScreen extends React.Component {
    static navigationOptions = {
        title: 'Flicker Photo'
    };
    render() {
        let { image_url, title, id, ownername } = this.props.navigation.state.params;
        return (
            <View>
                <Image source={{ uri: image_url }} style={styles.photoStyle} />
                <View>
                <Text style={styles.heading}>Title</Text>
                    <Text style={styles.detail}>{title}</Text>
                    <Text style={styles.heading}>Photo Id</Text>
                    <Text style={styles.detail}>{id}</Text>
                    <Text style={styles.heading}>Owner</Text>
                    <Text style={styles.detail}>{ownername}</Text>
                </View>
            </View>
        )
    }
}

export default DetailScreen;