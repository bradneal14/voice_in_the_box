import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

var App = require("./App.js");

class Dashboard extends Component {
  mixins: [TimerMixin]
  constructor(props){
    super(props);
    this.state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      stoppedPlaying: false,
      playing: false,
      finished: false,
      done: false,
    };
  }
  test(){
    console.log("this is a test from the highest level");
  }
  render(){
    return (
      <App test={this.test.bind(this)}/>
    )
  }

}

var styles = StyleSheet.create({
  everything: {
    flex: 1
  }
})

Dashboard.external = true;
module.exports = Dashboard;
