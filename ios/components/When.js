import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class When extends Component {
  render(){
    return (
      <View style={styles.contentBox}>
        <Text>When</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  contentBox: {
    backgroundColor: 'orange',
    borderWidth: 1,
    borderColor: 'blue',
    flex: 5,
  }
});

When.external === true;
module.exports = When;
