import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import TimerMixin from 'react-timer-mixin';
import {AudioRecorder, AudioUtils} from 'react-native-audio';

var recordingMonitor;

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
      hours: -1,
      minutes: -1,
    };
  }
  test(){
    console.log("this is a test from the highest level");
  }
  time(hours, minutes){
    console.log("we are saving a time up here", hours, minutes)
    this.setState({hours: hours, minutes: minutes});
    this.scheduleChecks();
  }
  scheduleChecks(){
    var that = this;
    bigTimer = window.setInterval(function(){
      console.log("intervals")
      that.checkForAlarm();
    }, 4000);
  }
  cancelChecks(){
    console.log("in cancel checks dashboard")
    window.clearTimeout(bigTimer);
  }
  checkForAlarm(){
    var now = new Date
    var hoursNow = now.getHours();
    var minutesNow = now.getMinutes();
    var secondsNow = now.getSeconds();
    var alarmHours = this.state.hours
    var alarmMinutes = this.state.minutes
    if (hoursNow === alarmHours && minutesNow === alarmMinutes){
      this._play();
      this.cancelChecks();
    }
  }
  componentDidMount() {
    let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac"
    });

    AudioRecorder.onProgress = (data) => {
      this.setState({currentTime: data.currentTime});
    };
    AudioRecorder.onFinished = (data) => {
      console.log(this, "this")
      this.setState({finished: data.finished});
      this.setState({done: true});
      console.log(`Finished recording: ${data.finished}`);
    };
    AsyncStorage.removeItem("currentTime");
    AsyncStorage.removeItem("stoppedRecording")
  }
  _pause() {
    if (this.state.recording)
      AudioRecorder.pauseRecording();
    else if (this.state.playing) {
      AudioRecorder.pausePlaying();
    }
  }

  _stop() {
    if (this.state.recording) {
      console.log("stopping recording")
      AudioRecorder.stopRecording();
      this.setState({stoppedRecording: true, recording: false});
    } else if (this.state.playing) {
      AudioRecorder.stopPlaying();
      this.setState({playing: false, stoppedPlaying: true});
    }
  }

  _record() {
    console.log("in recording")
    AudioRecorder.startRecording();
    this.setState({recording: true, playing: false});
    console.log(AudioUtils.DocumentDirectoryPath)
  }


 _play() {
    if (this.state.recording) {
      this._stop();
      this.setState({recording: false});
    }
    AudioRecorder.playRecording();
    this.setState({playing: true});
    setTimeout( () => { this.setState({playing: false});}, this.state.currentTime * 1000);
  }
  render(){
    return (
      <App test={this.test.bind(this)}
        play={this._play.bind(this)}
        pause={this._pause.bind(this)}
        stop={this._stop.bind(this)}
        record={this._record.bind(this)}
        time={this.time.bind(this)}
        data={this.state}/>
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
