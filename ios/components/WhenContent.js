import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

var TimeSelect = require('./TimeSelect.js')

class When extends Component {
  constructor(){
    super();
    this.state = {chosenDate: "none yet", saved: false}
  }
  saveAlarm(){
    console.log("alarm saved");
    this.setState({saved: true})
  }
  recieveDate(date){
    this.setState({chosenDate: date});
    this.unlock();
  }
  unlock(){
    if (this.state.saved === true){
      this.setState({saved: false});
    }
  }
  render(){
    if (this.state.saved === false){
      var lockButton =
        <TouchableHighlight
        onPress={this.saveAlarm.bind(this)}
        underlayColor='rgba(151, 10, 45, .2)'
        style={styles.saveButtonTouch}
        >
          <View style={styles.saveButtonBoxInner}>
            <Text style={styles.saveButtonText}>LOCK IT IN</Text>
          </View>
        </TouchableHighlight>
    } else {
      var lockButton =
        <View style={styles.saveButtonTouch}>
          <View style={styles.yesLockButtonBox}>
            <Image style={styles.lockImg} source={require("../../assets/img/lock.png")}/>
            <Text style={styles.yesLockButtonText}>ALARM IS SET</Text>
          </View>
            <Text style={styles.smallNote}>Change time to unlock</Text>
        </View>
    }
    return (
      <View style={styles.contentBox}>

        <View style={styles.timeBoxOuter}>
          <TimeSelect
            passDate={this.recieveDate.bind(this)}
            unlock={this.unlock.bind(this)}
            style={styles.picker}/>
        </View>

        <View style={styles.optionsBoxOuter}>
          <Text>{this.state.chosenDate.toString()}</Text>
          <Text>{this.state.saved.toString()}</Text>
        </View>

        <View>
          {lockButton}
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
    justifyContent: 'space-between',
  },
  timeBoxOuter: {
    height: 220,
    width: 220,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 220,
    marginTop: 30,
    flexDirection: 'column',
    // backgroundColor: 'rgba(250, 250, 250, .6)'
    backgroundColor: 'grey'
  },
  optionsBoxOuter: {
    width: 250,
    borderWidth: 0,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonBoxOuter: {
    width: 250,
    borderWidth: 0,
    borderColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#003366',
    fontFamily: 'Avenir-MediumOblique',
    fontSize: 28,
    textDecorationLine: 'underline'
  },
  saveButtonTouch:{
    height: 70,
    width: 220,
    marginBottom: 50,
  },
  picker: {
    alignSelf: 'flex-start'
  },
  saveButtonBoxInner: {
    height: 70,
    width: 220,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 10,
    marginTop: -18,
  },
  yesLockButtonBox: {
    height: 70,
    width: 220,
    borderWidth: 0,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: -15,

  },
  yesLockButtonText: {
    color: 'grey',
    fontFamily: 'Avenir-MediumOblique',
    fontSize: 28,
  },
  lockImg: {
    height: 40,
    width: 40,
    marginBottom: 8
  },
  smallNote: {
    marginTop: -20,
    alignSelf: 'flex-end',
    fontFamily: 'AvenirNext-Italic'
  }
});

When.external === true;
module.exports = When;
