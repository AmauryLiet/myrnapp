/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

type Props = {};

const IMAGE_URL = "https://www.uefa.com/MultimediaFiles/Photo/competitions/General/02/55/45/13/2554513_w1.jpg";

export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={{uri: IMAGE_URL}} style={styles.image}>
        <Text style={styles.welcome}>Welcome</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 30,
    color: 'white'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
});
