/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

type Props = {};

const IMAGE_URL = "https://www.uefa.com/MultimediaFiles/Photo/competitions/General/02/55/45/13/2554513_w1.jpg";

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: IMAGE_URL}} style={styles.image}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    flex: 1,
  },
});
