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
    if (this.state.tab==="when"){
      var display = <When test={this.props.test}
        time={this.props.time}/>
    } else {
      var display = <What testOne={this.props.test}
        play={this.props.play}
        pause={this.props.pause}
        stop={this.props.stop}
        record={this.props.record}
        data={this.props.data}/>
    }
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
