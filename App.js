import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';

import Expo from 'expo';

const { Location, Permissions } = Expo;

export default class Radar extends React.Component {
  render() {

    const getPermisions = async () => {
      await Promise.all([
        Permissions.NOTIFICATIONS,
        Permissions.USER_FACING_NOTIFICATIONS,
        Permissions.LOCATION,
        Permissions.CAMERA,
        Permissions.AUDIO_RECORDING,
        Permissions.CAMERA_ROLL
      ].map(permision => Permissions.askAsync(permision)))
    }

    getPermisions()

    return (
      <WebView
        source={{uri: 'https://radar.redelivre.org/'}}
      />
    );
  }
}
