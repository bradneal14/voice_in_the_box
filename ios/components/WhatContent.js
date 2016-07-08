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

var RecordButton = require("./RecordButton.js")


class What extends Component {
  mixins: [TimerMixin]
  constructor(){
    super();
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
      this.setState({finished: data.finished});
      this.setState({done: true});
      console.log(`Finished recording: ${data.finished}`);
    };
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
      AudioRecorder.stopRecording();
      this.setState({stoppedRecording: true, recording: false});
    } else if (this.state.playing) {
      AudioRecorder.stopPlaying();
      this.setState({playing: false, stoppedPlaying: true});
    }
  }

  _record() {
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
    if (this.state.stoppedRecording){
      var deleteButton = <TouchableHighlight
        onPress={this.test.bind(this)}
        underlayColor='rgba(151, 10, 45, .2)'
        style={styles.deleteButton}>
          <Text style={styles.deleteText}>DELETE RECORDING</Text>
        </TouchableHighlight>
    } else {
      var deleteButton = <Text style={styles.hidden}>DELETE RECORDING</Text>
    }
    return(
      <View style={styles.contentBox}>
        <View style={styles.topContent}>
          <TouchableHighlight
          onPress={this._play.bind(this)}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.speakerButtonBox}>
            <View style={styles.speakerBox}>
              {speakerImage}
            </View>
          </TouchableHighlight>
          <View>
            {deleteButton}
          </View>
        </View>
        <View style={styles.midContent}>
          <Text>This is middle content</Text>
        </View>
        <View style={styles.bottomContent}>
          <TouchableHighlight
          onPressIn={this._record.bind(this)}
          onPressOut={this._stop.bind(this)}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.recordButton}>
            <View style={styles.recordButtonBox}>
              <Text style={styles.recordButtonText}>Record</Text>
              <View style={styles.recordButtonSymbol}/>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  contentBox: {
    borderWidth:1,
    borderTopColor: 'green',
    flex: 5,
  },
  speakerImg: {
    height: 160,
    width: 160,
  },

  speakerBox: {
    height: 220,
    width: 220,
    borderRadius: 110,
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
    width: 220,
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
    width: 220,
    marginBottom: 0,
  },
  recordButtonSymbol:{
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ff3333',
    margin: 13
  },
  deleteButton: {
    alignSelf: 'center',
    justifyContent: 'flex-end',
    padding: 5
  },
  deleteText: {
    fontFamily: 'AvenirNext-Italic',
    fontSize: 20,
  },
  hidden: {
    color: 'rgba(151, 10, 45, 0)',
    fontFamily: 'AvenirNext-Italic',
    fontSize: 20,
    padding: 5
  },
  topContent: {
    flex: 3,
    borderWidth: 1,
    borderColor: 'pink',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  midContent: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center'
  },
  bottomContent: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

What.external = true;
module.exports = What;
