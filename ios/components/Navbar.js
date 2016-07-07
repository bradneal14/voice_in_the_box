import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'


var WhenButton = require("./WhenButton.js");
var WhatButton = require("./WhatButton.js");


class Navbar extends Component{

  render(){
    var display = this.props.tab==="when" ? <WhenButton/> : <WhatButton/>
    return (
      <View style={styles.navigationBox}>
          <TouchableHighlight
            onPress={this.props.onClick.bind(this)}
            underlayColor='rgba(151, 10, 45, .0)'
          >
          <View>
            {display}
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  navigationBox: {
    marginTop: 20,
    // backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

Navbar.external = true;
module.exports = Navbar;
