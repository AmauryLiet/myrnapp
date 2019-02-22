/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';

type Props = {};

const IMAGE_URL = "https://www.uefa.com/MultimediaFiles/Photo/competitions/General/02/55/45/13/2554513_w1.jpg";

export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground source={{uri: IMAGE_URL}} style={styles.image}/>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    justifyContent: 'flex-start',
  },
});
