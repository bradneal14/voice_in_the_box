import React, {Component} from "react";
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

class WhenButton extends Component {
  render(){
    return (
      <View>
        <Text>WhenButton</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  whenButton: {
    height: 20,
    backgroundColor: 'pink'
  }
})

WhenButton.external = true;
module.exports = WhenButton;
