import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

var App = require("./ios/components/App.js")

class voiceInTheBox extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('voiceInTheBox', () => voiceInTheBox);
