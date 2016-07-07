import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class WhatButton extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.whatButton}>
          <Text style={styles.whatText}>What</Text>
        </View>
        <View style={styles.whereButton}>
          <Text style={styles.whereText}>Where</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'grey',
  },
  whatButton: {
    marginLeft: -1,
    width: 110,
    height: 25,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  whatText: {
    color: '#003366',
    fontSize: 19,
    fontFamily: "Avenir-MediumOblique"
  },
  whereButton: {
    width: 100,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whereText: {
    color: 'grey',
    fontSize: 19,
    fontFamily: "Avenir-MediumOblique"
  }
})

WhatButton.external = true;
module.exports = WhatButton;
