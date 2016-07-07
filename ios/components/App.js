import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

var Navbar = require("./Navbar.js");
var When = require("./When.js");
var What = require("./What.js");

class App extends Component {
  constructor(){
    super();
    this.state = {tab: "pizza"};
  }
  toggleDisplay(){
    console.log(this.state);
    // if (this.state.tab === "when"){
    //   this.setState({tab: "what" });
    // } else {
    //   this.setState({tab: "when" });
    // }
  }
  render() {
    let display = this.state.tab==="when" ? <What/> : <When/>;
    return (
      <View style={styles.fullBack}>
        <Navbar onClick={this.toggleDisplay.bind(thisx)} tab={this.state.tab} />
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
