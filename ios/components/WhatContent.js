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
        <Text>What Content</Text>
        <TouchableHighlight
        onPress={this.playRecording}>
          <View>
            <Image style={styles.speakerImg} source={require('../../assets/img/speaker.png')}/>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
        onPress={this.playRecording}>
          <View>
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
    justifyContent: 'center',
  },
  speakerImg: {
    height: 180,
    width: 180,
  }
});

What.external = true;
module.exports = What;
