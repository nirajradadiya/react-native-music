import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const Login = () => {
    return (
        <Image
            source={require('../img/screen.png')}
            style={styles.container}>
            <View style={styles.logoBox}>
                <Image
                    style={styles.logo}
                    source={require('../img/logo.png')}
                    resizeMode="cover"
                />
            </View>
            <View>
                <Text style={styles.headline}>b<Text style={{ fontWeight: 'bold' }}>spoke</Text></Text>
            </View>
            <View>
                <Text style={styles.subheadline}>SMARTER WHEN YOU SPEAK</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableHighlight style={styles.touchablestyle}>
                    <Image
                        style={styles.button}
                        source={require('../img/twitter.png')}
                    />
                </TouchableHighlight>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableHighlight style={styles.touchablestyle}>
                    <Image
                        style={styles.button}
                        source={require('../img/facebook.png')}
                    />
                </TouchableHighlight>
            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableHighlight style={styles.touchablestyle}>
                    <Image
                        style={styles.button}
                        source={require('../img/google.png')}
                    />
                </TouchableHighlight>
            </View>
            <View>
                <Text style={styles.signemail} onPress={() => Actions.signup()}>Sign in with email</Text>
            </View>
        </Image>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        width: undefined,
        height: undefined,
        backgroundColor: 'transparent'
    },
    logoBox: {
        alignItems: 'center', 
        paddingTop: 80
    },
    logo: {
        width: 34,
        height: 50
    },
    headline: {
        fontSize: 36,
        textAlign: 'center',
        color: '#4d4d4d',
        paddingBottom: 15
    },
    subheadline: {
        fontSize: 16,
        letterSpacing: 0.364,
        textAlign: 'center',
        color: '#4d4d4d',
        paddingBottom: 35
    },
    button: {
        width: 300,
        height: 63
    },
    touchablestyle: {
        paddingBottom: 5
    },
    signemail: {
        fontSize: 18,
        textAlign: 'center',
        color: '#61c44b',
        paddingBottom: 15
    }
});

export default Login;