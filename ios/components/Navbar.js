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
  // constructor(props){
  //   super(props);
  //   this.state = {tab: this.props.tab}
  //   console.log(this.state, "STATE init");
  //   console.log(this.props, "PROPS init");
  // }

  render(){
    var display = this.props.tab==="when" ? <WhenButton/> : <WhatButton/>
    return (
      <View style={styles.navigationBox}>
        <TouchableHighlight onPress={this.props.onClick.bind(this)}>
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
