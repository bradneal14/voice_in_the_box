import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

var Navbar = require("./Navbar.js");
var When = require("./WhenContent.js");
var What = require("./WhatContent.js");
var Help = require('./Help.js');

class App extends Component {
  constructor(props){
    super(props);
    this.state = {tab: "when"};
  }
  toggleContent(){
    if (this.state.tab === "when"){
      this.setState({tab: "what" });
    } else {
      this.setState({tab: "when" });
    }
  }
  render() {
    let display = this.state.tab==="when" ? <When test={this.props.test}/> : <What testOne={this.props.test}/>;
    return (
      <View style={styles.fullBack}>
        <Navbar onClick={this.toggleContent.bind(this)} tab={this.state.tab} />
        {display}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  fullBack: {
    flex: 1,
    backgroundColor: '#003366',
  }
});

App.external = true;
module.exports = App;
