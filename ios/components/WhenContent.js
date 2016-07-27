"use strict"
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
var TimeSelect = require('./TimeSelect.js');
var What = require('./WhatContent.js')
var storageKey = "AlarmAppStorageKey"
var timer;
class When extends Component {
  constructor(){
    super();
    let dateObj = new Date();
    this.state = {chosenDate: dateObj, saved: false, other: 17}
    console.log(this.state, "initial state")
  }
  scheduleChecks(){
    var that = this;
    timer = window.setInterval(function(){
      console.log("intervals")
      console.log(What)
      that.checkForAlarm();
    }, 4000);
  }
  cancelChecks(){
    console.log("in cancel checks")
    window.clearTimeout(timer);
  }
  checkForAlarm(){
    var now = new Date
    var hoursNow = now.getHours();
    var minutesNow = now.getMinutes();
    var secondsNow = now.getSeconds();
    var alarmHours = this.state.hours
    var alarmMinutes = this.state.minutes
    if (hoursNow === alarmHours && minutesNow === alarmMinutes){
      console.log("WOOO THIS IS AN ALARM")
      this.cancelChecks();
    }
  }
  saveAlarm(){
    console.log("alarm saved and we just saved to async");
    var dateToParse = this.state.chosenDate
    var hours = dateToParse.getHours();
    var minutes = dateToParse.getMinutes();
    var seconds = dateToParse.getSeconds();
    this.setState({saved: true, minutes: minutes, hours: hours, seconds: seconds}, () => console.log("specific time set", hours, minutes));
    AsyncStorage.setItem(storageKey, this.state.chosenDate);
  }
  recieveDate(date){
    this.setState({chosenDate: date});
    this.unlock();
  }
  getAsync(){
    console.log("in get async");
    AsyncStorage.getItem(storageKey).then((value) => {this.setState({other: value});}).done()
  }
  logState() {
    console.log(this.state)
    this.scheduleChecks();
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

        <View style={styles.topContent}>
          <View style={styles.timeBoxOuter}>
            <TimeSelect
              passDate={this.recieveDate.bind(this)}
              unlock={this.unlock.bind(this)}
              />
          </View>
        </View>


        <View style={styles.bottomContent}>
            {lockButton}
        </View>

        <TouchableHighlight
        onPress={this.getAsync.bind(this)}
        underlayColor='rgba(151, 10, 45, .2)'>
          <View>
            <Text>GET ASYNC</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={this.logState.bind(this)}
        underlayColor='rgba(151, 10, 45, .2)'>
          <View>
            <Text>LOG STATE</Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
};

var circleWidth = (Dimensions.get("window").width - 90);
var circleRadius = circleWidth / 2
var styles = StyleSheet.create({
  contentBox: {
    borderWidth: 1,
    borderTopColor: 'green',
    borderColor: 'rgba(0,0,0,.0)',
    flex: 5,
  },
  timeBoxOuter: {
    height: circleWidth,
    width: circleWidth,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: circleRadius,
    marginTop: 0,
    flexDirection: 'row',
    // backgroundColor: 'rgba(250, 250, 250, .6)'
    backgroundColor: 'grey'
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
    borderWidth: 0,
    borderColor: 'green',
    alignItems: 'center',
  },
  bottomContent: {
    flex: 2,
    borderWidth: 0,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
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
  buttonBoxOuter:{
    borderColor: 'purple',
    borderWidth: 0,
    justifyContent: 'center',
    // flex: 2
  },
  saveButtonText: {
    color: '#003366',
    fontFamily: 'Avenir-MediumOblique',
    fontSize: 28,
    textDecorationLine: 'underline'
  },
  saveButtonTouch:{
    height: 70,
    width: circleWidth,
    marginBottom: 0,
  },
  saveButtonBoxInner: {
    height: 70,
    width: circleWidth,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'column',
    backgroundColor: 'grey',
    borderRadius: 10,
    marginTop: -0,
  },
  yesLockButtonBox: {
    height: 70,
    width: circleWidth,
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
