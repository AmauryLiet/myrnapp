/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

type Props = {};

const IMAGE_URL =
  'https://www.uefa.com/MultimediaFiles/Photo/competitions/General/02/55/45/13/2554513_w1.jpg';

export default class App extends Component<Props> {
  state = { openDescription: false };

  render() {
    return (
      <ScrollView scrollEnabled={this.state.openDescription}>
        <Image source={{ uri: IMAGE_URL }} style={styles.image} />
        {this.renderBody()}
      </ScrollView>
    );
  }

  renderBody = () => {
    return (
      <ScrollView scrollEnabled={this.state.openDescription}>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.elapsedTime}>7 hours ago</Text>
        </View>
        <View style={styles.divider} />
        <Text style={styles.moreInfo} onPress={this.handlePress}>
          More info
        </Text>
        {this.state.openDescription && (
          <View>
            <Text>A description</Text>
            <Text>on mutliple</Text>
            <Text>line</Text>
          </View>
        )}
      </ScrollView>
    );
  };

  handlePress = () => {
    this.setState({ openDescription: !this.state.openDescription });
  };
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 30,
    color: 'white'
  },
  elapsedTime: {
    textAlign: 'center',
    color: 'white'
  },
  image: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    top: 0,
    left: 0
  },
  divider: {
    height: 620
  },
  moreInfo: {
    textAlign: 'right',
    margin: 20,
    color: 'blue'
  }
});
