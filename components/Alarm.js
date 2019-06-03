import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, TextInput, View, Button} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";

export default class Alarm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false
        };

        this.handleDatePicked = this.handleDatePicked.bind(this);
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
    };

    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false });
    };

    handleDatePicked = date => {
        console.log("A date has been picked: ", date);
        this.props.handleDatePicked(date);
        this.hideDateTimePicker();
    };

    render() {
        return (
            <>
                <Button title="Alarm" style={{size:5}} onPress={this.showDateTimePicker} />
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this.handleDatePicked}
                    onCancel={this.hideDateTimePicker}
                />
            </>
        );
    }
}

