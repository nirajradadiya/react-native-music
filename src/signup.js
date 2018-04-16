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

const Signup = () => {
  return (
    <Image
      source={require('../img/screen.png')}
      style={styles.container}>
      <View>
        <Text style={styles.signuptext}>
          Sign up
        </Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <View style={{ width: 100 }}>
          <Image
            style={styles.logo}
            source={require('../img/profile.png')}
            center
          />
        </View>
        <View style={styles.changePhoto}>
          <Text style={{ borderBottomWidth: 1, borderBottomColor: '#4768f3' }}>
            CHANGE PHOTO
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text>
          NAME
        </Text>
        <TextInput
          style={styles.input}
        />
      </View>
      <View>
        <Text>
          EMAIL
        </Text>
        <TextInput
          style={styles.input}
          keyboardType={'email-address'}
        />
      </View>
      <View>
        <Text>
          PASSWORD
        </Text>
        <TextInput
          style={styles.input}
        />
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
  },
  logo: {
    width: 100,
    height: 100
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
  input: {
    height: 40,
    color: '#4768f3',
    borderColor: '#4768f3',
    marginBottom: 10
  },
  changePhoto: {
    fontSize: 24,
    paddingTop: 40,
    paddingLeft: 20
  }
});

export default Signup;