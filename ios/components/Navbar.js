import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

class Navbar extends Component{
  render(){
    return (
      <View>
        <Text>Navbar</Text>
        <Text>{this.props.tab}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create(){
  
}

Navbar.external = true;
module.exports = Navbar;
