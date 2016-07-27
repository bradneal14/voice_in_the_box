import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';

var Dashboard = require("./ios/components/Dashboard.js")

class voiceInTheBox extends Component {
  render() {
    return (
      <Dashboard/>
    );
  }
}

AppRegistry.registerComponent('voiceInTheBox', () => voiceInTheBox);
