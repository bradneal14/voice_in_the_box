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

import {AudioRecorder, AudioUtils} from 'react-native-audio';

var RecordButton = require("./RecordButton.js")


class What extends Component {
  constructor(){
    super();
    this.state = {
      currentTime: 0.0,
      recording: false,
      stoppedRecording: false,
      stoppedPlaying: false,
      playing: false,
      finished: false,
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
      this.setState({currentTime: Math.floor(data.currentTime)});
    };
    AudioRecorder.onFinished = (data) => {
      this.setState({finished: data.finished});
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
  }

 _play() {
    if (this.state.recording) {
      this._stop();
      this.setState({recording: false});
    }
    AudioRecorder.playRecording();
    this.setState({playing: true});
  }

  render(){
    if (this.state.recording){
      var speakerImage = <Image style={styles.speakerImg} source={require('../../assets/img/red-speaker.png')}/>
    } else {
      var speakerImage = <Image style={styles.speakerImg} source={require('../../assets/img/speaker.png')}/>
    }
    return(
      <View style={styles.contentBox}>
        <View>
          <TouchableHighlight
          onPress={this._play.bind(this)}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.speakerButtonBox}>
            <View style={styles.speakerBox}>
              {speakerImage}
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPressIn={this._record.bind(this)}
          onPressOut={this._stop.bind(this)}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.recordButton}>
            <View style={styles.recordButtonBox}>
              <Text style={styles.recordButtonText}>Record!</Text>
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
    borderWidth: 1,
    borderTopColor: 'green',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  speakerImg: {
    height: 160,
    width: 160,
  },
  topContent: {
    flex: 3,
    borderWidth: 2,
    borderColor: 'pink'
  },
  midContent: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'blue'
  },
  bottomContent: {
    flex: 2,
    borderWidth: 2,
    borderColor: 'purple'
  },
  speakerBox: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speakerButtonBox: {
    height: 200,
    width: 200,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: "center"
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
    borderWidth: 2,
    borderColor: 'green',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 10,
  },
  recordButton: {
    height: 70,
    width: 220,
    marginBottom: 30,
  },
  recordButtonSymbol:{
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#ff3333',
    margin: 13
  }
});

What.external = true;
module.exports = What;
