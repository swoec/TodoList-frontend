import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text,TextInput,View, Button} from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';


import Home from './../screens/Home'
import Register from './../screens/Register'
import Login from './../screens/Login'
import Reminder from './../components/Reminder'
import TodoList from './../screens/TodoList'
import Settings from './../screens/Settings'

export const AppNavigator = createStackNavigator({
    Home: {
        screen: Home
    },
    Register: {
        screen: Register,
        navigationOptions:({navigation})=>({
            title:'sign up'
        })
    },
    Login: {
        screen: Login
    },
    Reminder: {
        screen: Reminder
    },
    Settings: {
        screen: Settings,
        navigationOptions:({navigation})=>({
            title:'settings'
        })
    },
    TodoList: {
        screen: TodoList,
        navigationOptions:()=> {
            return {
                title: 'reminder',

            };
        }
    },
}

);