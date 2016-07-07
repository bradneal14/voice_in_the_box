import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

var RecordButton = require("./RecordButton.js")

class What extends Component {
  playRecording(){
    console.log("playing recording");
  }
  render(){
    return(
      <View style={styles.contentBox}>
        <TouchableHighlight
        onPress={this.playRecording}
        underlayColor='rgba(151, 10, 45, .2)'>
          <View style={styles.speakerBox}>
            <Image style={styles.speakerImg} source={require('../../assets/img/speaker.png')}/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={this.playRecording}
        underlayColor='rgba(151, 10, 45, .2)'>
          <View style={styles.buttonBox}>
          </View>
        </TouchableHighlight>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  contentBox: {
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'green',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  speakerImg: {
    height: 160,
    width: 160,
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
  buttonBox: {
    height: 70,
    width: 220,
    borderWidth: 2,
    borderColor: 'green',
  }
});

What.external = true;
module.exports = What;
