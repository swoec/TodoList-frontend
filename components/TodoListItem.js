import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import { RadioButton } from 'react-native-paper';


export default class TodoListItem extends Component {
    constructor() {
        super();
        this.state = {checked: ''};
    }


    render(): React.ReactNode {
        const {todolist} = this.props;
        return (
            <View style={{flexDirection:'row'}}>
                <RadioButton
                    value=todolist.id
                    status={checked === value ? 'checked' : 'unchecked'}
                    onPress={() => { this.setState({ checked: value }); }}
                />
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:20}}>{todolist.title} </Text>
                    <Text style={{fontSize:10}}>{todolist.time}</Text>
                </View>

            </View>

        );
    }
}

TodoListItem.propTypes = {

        id: PropTypes.number,
        title: PropTypes.string,
        time: PropTypes.string,
        userId: PropTypes.number,
        proirity:PropTypes.number,
        location:PropTypes.string,

        // handleClick :PropTypes.func,

};

TodoListItem.defaultProps = {
    todoListItem: {},

    // handleClick :PropTypes.func,
};