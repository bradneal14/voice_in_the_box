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
        <View style={styles.whenButton}>
          <Text style={styles.whenText}>When</Text>
        </View>
        <View style={styles.whatButton}>
          <Text style={styles.whatText}>What</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'grey',
  },
  whatButton: {
    marginRight: -1,
    width: 100,
    height: 25,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  whatText: {
    color: '#003366',
    fontSize: 19,
    fontFamily: "Avenir-MediumOblique",
  },
  whenButton: {
    width: 100,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whenText: {
    color: 'grey',
    fontSize: 19,
    fontFamily: "Avenir-MediumOblique"
  }
})

WhatButton.external = true;
module.exports = WhatButton;
