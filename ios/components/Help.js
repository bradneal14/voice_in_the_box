import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight
} from 'react-native';

class Help extends Component {

  render(){
    return (
      <View>
        <Modal
          animationType="fade">
          <View style={styles.modalBackground}>
            <Text>This is a modal</Text>
          </View>
        </Modal>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Help.external = true;
module.exports = Help;
