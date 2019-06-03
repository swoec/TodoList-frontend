import React, {Component} from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import {AppRegistry, Platform, StyleSheet, Text,TextInput,View, Button} from 'react-native';


import {getUser} from './../apis/User-api'
import TodoList from './TodoList'

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {email: '',
            password:'',
        loginIn:true};
    }

    toLogin=()=>{
        getUser(this.state.email,this.state.password).then(loginIn=>{this.setState({loginIn})});
        const {navigate} = this.props.navigation;

        debugger;
        if(this.state.loginIn){
            // Navigator.push({
            //     name: 'TodoList',
            //     component: TodoList
            // });
            this.props.navigation.navigate('TodoList',{name:this.state.email})
            // navigate('TodoList');
            {/*<TodoList user={this.state.email}/>*/}

        }else{
            {/*<Home/>*/}
            // navigate('Home');
            this.props.navigation.navigate('Home')
            // Navigator.push({
            //     name: 'TodoList',
            //     component: Home
            // });
        }

    }
    toSignUp=()=>{
        this.props.navigation.navigate('Register')
    }

    render(): React.ReactNode {
        return (
            <View style={{flexDirection:'column',marginTop:10,padding: 20,marginHeight:15}}>

                <Text
                    style={{fontSize: 27,margin:10}}>
                    Login
                </Text>

                <TextInput
                    style={{height: 40,margin:10}}
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                <TextInput
                    password={true}
                    style={{height: 40,margin:10}}
                    placeholder="password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({password})}
                />
                <View style={{margin:10}} />

                <Button title='submit' onPress={this.toLogin}>submit</Button>
                <View style={{margin:10}} />
                <Button title='sign up'
                        style={{borderRadius: '2', color:'green'}}
                        onPress={this.toSignUp}>sign up</Button>
            </View>
        );
    }

}




