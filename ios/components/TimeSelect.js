import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  DatePickerIOS
} from 'react-native';

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

var styles = StyleSheet.create({
  datePicker:{
    width: 150,
    height: 100,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: 0,

  }
})

TimeSelect.external = true;
module.exports = TimeSelect;
