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
      source={require('../img/respon.png')}
      style={styles.container}>
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