import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import Dimensions from 'Dimensions';
import TimerMixin from 'react-timer-mixin';
import {AudioRecorder, AudioUtils} from 'react-native-audio';
var recordTimer;
var elapsedTime = 0;
var RecordButton = require("./RecordButton.js")

class What extends Component {
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
  logProps(){
    console.log(this.state)
  }
  //OLD "COMPONENT WILL MOUNT"
  // console.log(this.state.currentTime, "current time on mount")
  // let audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';
  //
  // AudioRecorder.prepareRecordingAtPath(audioPath, {
  //   SampleRate: 22050,
  //   Channels: 1,
  //   AudioQuality: "Low",
  //   AudioEncoding: "aac"
  // });
  //
  // AudioRecorder.onProgress = (data) => {
  //   this.setState({currentTime: data.currentTime});
  // };
  // AudioRecorder.onFinished = (data) => {
  //   this.setState({finished: data.finished});
  //   this.setState({done: true});
  //   console.log(`Finished recording: ${data.finished}`);
  // };
  componentDidMount(){
    if (this.props.data){
      var dashboardState = this.props.data
      var currentTime = this.props.data.currentTime;
      var stoppedRecording = this.props.data.stoppedRecording
      this.setState({currentTime: currentTime, stoppedRecording: stoppedRecording})
    }
    // AsyncStorage.getItem("currentTime").then((value) => this.setState({currentTime: parseInt(value)})).done();
    // AsyncStorage.getItem("stoppedRecording").then((value) => this.setState({stoppedRecording: Boolean(value)})).done();
  }
  componentWillUnmount(){
    if (this.state.stoppedRecording){
      console.log("we should be saving here")
      var currentTime = this.state.currentTime;
      var stoppedRecording = true;
      // AsyncStorage.setItem("currentTime", currentTime.toString());
      // AsyncStorage.setItem("stoppedRecording", stoppedRecording.toString());
    }
  }

  _stop() {
    this.props.stop();
    if (this.state.recording) {
      this.setState({stoppedRecording: true, recording: false});
      this.endTimer();
    } else if (this.state.playing) {
      this.setState({playing: false, stoppedPlaying: true});
    }
  }
  startTimer(){
    recordTimer = window.setInterval(function(){
      console.log(elapsedTime)
      elapsedTime+=.100000
    }, 100);
  }
  endTimer(){
    elapsedTime *= 1.101
    elapsedTime += .5
    console.log(elapsedTime, "elapsed time")
    window.clearInterval(recordTimer);
    this.setState({currentTime: elapsedTime})
    elapsedTime = 0;
  }

  _record() {
    elapsedTime = 0;
    this.props.record();
    this.setState({recording: true, playing: false});
    this.startTimer();
  }
  _play() {
    if (this.state.stoppedRecording === true){
      console.log(this.state.currentTime)
      this.props.play();
      if (this.state.recording) {
        this._stop();
        this.setState({recording: false});
      }
      console.log(this.state.currentTime)
      this.setState({playing: true}, () => {
        setTimeout( () => { this.setState({playing: false});}, this.state.currentTime * 1000);
      });
    }
  }
  test(){
    this.setState({stoppedRecording: false})
    console.log("testing");
  }

  render(){
    if (this.state.recording){
      var speakerImage = <Image style={styles.speakerImg} source={require('../../assets/img/input-speaker.png')}/>
    } else if (this.state.playing){
      var speakerImage = <Image style={styles.speakerImg} source={require('../../assets/img/output-speaker.png')}/>
    } else if (this.state.stoppedRecording){
      var speakerImage = <Image style={styles.speakerImg} source={require('../../assets/img/has-speaker.png')}/>
    } else {
      var speakerImage = <Image style={styles.speakerImg} source={require('../../assets/img/speaker.png')}/>
    }
    if (!this.state.stoppedRecording){
      var recordText = <Text style={styles.recordButtonText}>Record</Text>
    } else {
      var recordText = <Text style={styles.recordButtonText}>Re-Record</Text>
    }
    return(
      <View style={styles.contentBox}>
        <View style={styles.topContent}>
          <TouchableHighlight
          onPress={this._play.bind(this)}
          underlayColor='rgba(151, 10, 45, .0)'
          style={styles.speakerButtonBox}>
            <View style={styles.speakerBox}>
              {speakerImage}
            </View>
          </TouchableHighlight>

        </View>

        <View style={styles.bottomContent}>
          <TouchableHighlight
          onPressIn={this._record.bind(this)}
          onPressOut={this._stop.bind(this)}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.recordButton}>
            <View style={styles.recordButtonBox}>
              {recordText}
              <View style={styles.recordButtonSymbol}/>
            </View>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
        onPress={this.props.testOne}
        underlayColor='rgba(151, 10, 45, .2)'>
          <View>
            <Text>TEST IT</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

}

var circleWidth = (Dimensions.get("window").width - 80);
var circleRadius = circleWidth / 2;


var styles = StyleSheet.create({
  contentBox: {
    borderWidth:1,
    borderTopColor: 'green',
    borderColor: 'rgba(0,0,0,.0)',
    flex: 5,
  },
  speakerImg: {
    height: circleWidth - 80,
    width: circleWidth - 80,
  },
  speakerButtonBox:{
    height: circleWidth,
    width: circleWidth,
    borderRadius: circleRadius,
  },
  speakerBox: {
    height: circleWidth,
    width: circleWidth,
    borderRadius: circleRadius,
    borderColor: 'grey',
    borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recordButtonText: {
    color: '#003366',
    fontFamily: 'Avenir-MediumOblique',
    fontSize: 38,
    paddingRight: 4,
  },
  recordButtonBox: {
    height: 70,
    width: circleWidth,
    borderWidth:2,
    borderColor: 'green',
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  recordButton: {
    height: 70,
    width: circleWidth,
    marginBottom: 0,
  },
  recordButtonSymbol:{
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ff3333',
    margin: 6
  },
  deleteButton: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    padding: 5,
  },
  deleteText: {
    fontFamily: 'AvenirNext-Italic',
    fontSize: circleRadius / 9,
  },
  hidden: {
    color: 'rgba(151, 10, 45, 0)',
    fontFamily: 'AvenirNext-Italic',
    fontSize: 20,
    padding: 5
  },
  topContent: {
    flex: 3,
    borderWidth: 0,
    borderColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 10,
  },
  midContent: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    alignItems: 'center'
  },
  bottomContent: {
    flex: 2,
    borderWidth: 0,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

What.external = true;
module.exports = What;
