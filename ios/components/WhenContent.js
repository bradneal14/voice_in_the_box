import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

var TimeSelect = require('./TimeSelect.js')

class When extends Component {
  constructor(){
    super();
    this.state = {chosenDate: "none yet"}
  }
  saveAlarm(){
    console.log("alarm saved");
  }
  recieveDate(date){
    this.setState({chosenDate: date});
  }
  render(){
    return (
      <View style={styles.contentBox}>

        <View style={styles.timeBoxOuter}>
          <TimeSelect passDate={this.recieveDate.bind(this)} style={styles.picker}/>
        </View>
        <View style={styles.optionsBoxOuter}>
          <Text>{this.state.chosenDate.toString()}</Text>
        </View>

        <View>
          <TouchableHighlight
            onPress={this.saveAlarm}
            underlayColor='rgba(151, 10, 45, .2)'
            style={styles.saveButtonTouch}
            >
            <View style={styles.saveButtonBoxInner}>
              <Text style={styles.saveButtonText}>LOCK IT IN</Text>
            </View>
          </TouchableHighlight>
        </View>

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeBoxOuter: {
    height: 220,
    width: 250,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionsBoxOuter: {
    width: 250,
    borderWidth: 2,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonBoxOuter: {
    width: 250,
    borderWidth: 4,
    borderColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonText: {
    color: '#003366',
    fontFamily: 'Avenir-MediumOblique',
    fontSize: 28,
    textDecorationLine: 'underline'
  },
  saveButtonTouch:{
    height: 70,
    width: 220,
    marginBottom: 50,
  },
  picker: {
    height: 100,
    marginTop: -100,
  },
  saveButtonBoxInner: {
    height: 70,
    width: 220,
    borderWidth: 2,
    borderColor: 'green',
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    backgroundColor: 'grey',
    borderRadius: 10,
    // marginTop: -50,
  },
});

When.external === true;
module.exports = When;
