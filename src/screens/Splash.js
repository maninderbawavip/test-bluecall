import React, { Component } from 'react';
import { View, Image } from 'react-native';

import styles from '../styles';

class Splash extends Component {

    componentWillMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Search')
        }, 2000);      
    }

    render() {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <Image
                    style={{ height: 100, width: 280  }}
                    resizeMode="stretch"
                    source={require('../images/logo.png')}
                />
            </View>
        )
    }
}

export default Splash;