import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';

export default class Radar extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://radar.redelivre.org/'}}
      />
    );
  }
}
