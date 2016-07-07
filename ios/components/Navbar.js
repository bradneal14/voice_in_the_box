import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'


class Navbar extends Component{
  render(){
    return (
      <View style={styles.navigationBox}>
        <TouchableHighlight onPress={this.props.onClick}>
          <Text>Navbar</Text>
        </TouchableHighlight>
        <Text>{this.props.tab}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  navigationBox: {
    marginTop: 20,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
Navbar.external = true;
module.exports = Navbar;
