import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Text,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const Followfriend = () => {
    return (
        <Image
            source={require('../img/screen.png')}
            style={styles.container}>
            <View>
                <Text style={styles.signuptext}>
                    Follow{"\n"}
                    Friends
                </Text>
            </View>
            <ScrollView vertical showsVerticalScrollIndicator={false} style={{ marginTop: 15 }}>
                <View style={styles.box}>
                    <View style={{ width: 50 }}>
                        <Image
                            style={styles.profile}
                            source={require('../img/profile.png')}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text>First Last</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <Image style={styles.check} source={require('../img/right-arrow.png')} />
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{ width: 50 }}>
                        <Image
                            style={styles.profile}
                            source={require('../img/profile.png')}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text>First Last</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <Image style={styles.check} source={require('../img/right-arrow.png')} />
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{ width: 50 }}>
                        <Image
                            style={styles.profile}
                            source={require('../img/profile.png')}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text>First Last</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <Image style={styles.check} source={require('../img/right-arrow.png')} />
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{ width: 50 }}>
                        <Image
                            style={styles.profile}
                            source={require('../img/profile.png')}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text>First Last</Text>
                    </View>
                    <View style={{ flex: 0 }}>
                        <Image style={styles.check} source={require('../img/right-arrow.png')} />
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={{ width: 50 }}>
                        <Image
                            style={styles.profile}
                            source={require('../img/profile.png')}
                        />
                    </View>
                    <View style={styles.text}>
                        <Text>First Last</Text>
                    </View>
                </View>
            </ScrollView>
            <View>
                <TouchableHighlight onPress={() => Actions.homefeed()}>
                    <Image
                        style={styles.button}
                        source={require('../img/letsgo.png')}
                    />
                </TouchableHighlight>
            </View>
        </Image >
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
    profile: {
        width: 50,
        height: 50
    },
    signuptext: {
        fontSize: 40,
        color: '#4867f3',
    },
    button: {
        width: 300,
        height: 63,
        marginTop: 20
    },
    text: {
        flex: 1,
        fontSize: 36,
        paddingTop: 15,
        paddingLeft: 20
    },
    box: {
        flexDirection: 'row',
        marginTop: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#4768f3',
        paddingBottom: 5
    },
    check: {
        width: 25,
        height: 18,
        marginTop: 13
    }
});

export default Followfriend;