import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text,TextInput,View, Button} from 'react-native';

export default class Register extends Component{

    constructor(props) {
        super(props);
        this.state = {email: '',
        password:''};
    }

    render(): React.ReactNode {
        return (
            <View>
                <TextInput
                    style={{height: 40}}
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    password={true}
                    style={{height: 40}}
                    placeholder="password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                />
                <TextInput
                    password={true}
                    style={{height: 40}}
                    placeholder="confirm password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                />
                
                <Button title='submit'>submit</Button>
            </View>
        );
    }

}