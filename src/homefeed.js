import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Fab } from 'native-base';

const Homefeed = () => {
    return (
        <View
            style={styles.container}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} scrollEventThrottle={10}>
                    <View style={styles.imageBox}>
                        <Image source={require('../img/border.png')} style={styles.img}>
                            <Image source={require('../img/images-1.png')} style={{ width: 51, height: 51, margin: 13 }}></Image>
                        </Image>
                    </View>
                    <View style={styles.imageBox}>
                        <Image source={require('../img/border.png')} style={styles.img}>
                            <Image source={require('../img/images-1.png')} style={{ width: 51, height: 51, margin: 13 }}></Image>
                        </Image>
                    </View>
                    <View style={styles.imageBox}>
                        <Image source={require('../img/border.png')} style={styles.img}>
                            <Image source={require('../img/images-1.png')} style={{ width: 51, height: 51, margin: 13 }}></Image>
                        </Image>
                    </View>
                    <View style={styles.imageBox}>
                        <Image source={require('../img/border.png')} style={styles.img}>
                            <Image source={require('../img/images-1.png')} style={{ width: 51, height: 51, margin: 13 }}></Image>
                        </Image>
                    </View>
                    <View style={styles.imageBox}>
                        <Image source={require('../img/border.png')} style={styles.img}>
                            <Image source={require('../img/images-1.png')} style={{ width: 51, height: 51, margin: 13 }}></Image>
                        </Image>
                    </View>
                </ScrollView>
            </View>
            <Container showsVerticalScrollIndicator={false} style={{ padding: 5 }}>
                <Content>
                    <Fab
                        direction="right"
                        containerStyle={{ marginLeft: 10 }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight">
                        <Icon name="share" />
                    </Fab>
                    <Card style={{ borderRadius: 20, borderWidth: 1, borderColor: '#000' }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../img/user.png')} style={{ marginTop: 15 }} />
                                <Body>
                                    <Text style={{ color: '#4768f3' }}>Reply All <Text style={{ color: '#000' }}>by</Text> Gimlet Media</Text>
                                    <Text note>5 min ago</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Image source={require('../img/replay-all.png')} style={{ resizeMode: 'cover', width: 320, height: 250 }} />
                        </CardItem>
                        <CardItem>
                            <Text>
                                It is a long established fact that a reader
                                will be distracted by the readable content of
                                a page when looking at its layout
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Button transparent>
                                <Image source={require('../img/chat-icon.png')} style={{ width: 20, height: 20 }} />
                                <Text style={{ marginLeft: 5, color: '#000' }}>45 Responses</Text>
                            </Button>
                            <Button transparent>
                                <Image source={require('../img/plan-icon.png')} style={{ width: 32, height: 20 }} />
                            </Button>
                            <Button transparent onPress={() => Actions.demo1()}>
                                <Image source={require('../img/heart-icon.png')} style={{ width: 22, height: 20 }} />
                                <Text style={{ marginLeft: 5, color: '#000' }}>322</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: '#FFF'
    },
    imageBox: {
        flex: 1,
        marginRight: 10
    },
    img: {
        width: 76,
        height: 76
    }
});

export default Homefeed;