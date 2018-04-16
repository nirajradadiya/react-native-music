import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

import { Actions } from 'react-native-router-flux';

const Demo1 = () => {
  return (
    <Image
      source={require('../img/saveshare.png')}
      style={styles.container}>
      <View>
        <Text style={styles.signuptext}>
          Sign up
        </Text>
      </View>    
      <View>
        <TouchableHighlight onPress={() => Actions.followfriend()}>
          <Image
            style={styles.button}
            source={require('../img/signup.png')}
          />
        </TouchableHighlight>
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
  }
});

export default Demo1;