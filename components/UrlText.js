// @flow
import React, { Component } from 'react';
import { Linking, StyleSheet, Text } from 'react-native';

class UrlText extends Component {
  handleUrlClick = () => {
    Linking.openURL(this.props.url);
  };

  render() {
    const { style, children, url, ...props } = this.props;
    return (
      <Text
        style={[styles.text, style]}
        onPress={this.handleUrlClick}
        {...props}
      >
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
});

export default UrlText;
