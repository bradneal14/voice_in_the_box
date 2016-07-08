import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  DatePickerIOS,
} from 'react-native';
import Dimensions from 'Dimensions';


class TimeSelect extends Component {
  constructor(props){
    super(props);
    let dateObj = new Date();
    this.state = {date: dateObj}
  }
  onDateChange(date){
    this.setState({date: date});
    this.props.passDate(date)
    this.props.unlock;
  }
  render(){
    return(
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.date}
          mode="time"
          onDateChange={this.onDateChange.bind(this)}
          minuteInterval={1}
          style={styles.datePicker}
          />
      </View>
    )
  }
}

var circleWidth = (Dimensions.get("window").width - 90);
var circleRadius = circleWidth / 2;

var styles = StyleSheet.create({
  datePicker:{
    width: circleWidth - 40,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 0,

  }
})

TimeSelect.external = true;
module.exports = TimeSelect;
