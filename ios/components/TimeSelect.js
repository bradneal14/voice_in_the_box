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
  }
  render(){
    return(
      <View style={styles.datePicker}>
        <DatePickerIOS
          date={this.state.date}
          mode="time"
          onDateChange={this.onDateChange.bind(this)}
          minuteInterval={1}
          />
      </View>
    )
  }
}

var styles = StyleSheet.create({
  datePicker:{
    width: 200,
    height: 50,
  }
})

TimeSelect.external = true;
module.exports = TimeSelect;
