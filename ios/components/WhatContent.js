import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,

} from 'react-native';

class What extends Component {
  render(){
    return(
      <View style={styles.contentBox}>
        <Text>What Content</Text>
      </View>
    )
  }

}

var styles = StyleSheet.create({
  contentBox: {
    backgroundColor: 'yellow',
    borderWidth: 1,
    borderColor: 'green',
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

What.external = true;
module.exports = What;
