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
        <View>
          <TouchableHighlight
          onPress={this.playRecording}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.speakerButtonBox}>
            <View style={styles.speakerBox}>
              <Image style={styles.speakerImg} source={require('../../assets/img/speaker.png')}/>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight
          onPress={this.playRecording}
          underlayColor='rgba(151, 10, 45, .2)'
          style={styles.recordButton}>
            <View style={styles.recordButtonBox}>
              <Text style={styles.recordButtonText}>Record</Text>
            </View>
          </TouchableHighlight>
        </View>
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
    fontSize: 38
  },
  recordButtonBox: {
    height: 70,
    width: 220,
    borderWidth: 2,
    borderColor: 'green',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: "center"
  },
  recordButton: {
    height: 70,
    width: 220,
    marginBottom: 30,
  }
});

What.external = true;
module.exports = What;
