import React, {Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text,TextInput,View, Button,Switch} from 'react-native';

import Alarm from './../components/Alarm'

export default class Settings extends Component{
    static navigationOptions =({navigation})=>({
        title:'Setting',
        headerRight:<Button title="Done" onPress={()=>navigation.navigate('Settings')}/>,
    }) ;
    constructor(props) {
        super(props);
        this.state = {remindstate: false,
            remindLocation:false,
            alarm:'',
            repeat:false,
            Location:'',
            proirity:false,
            note:'',
            password:''};
        this.alarmSwitch = this.alarmSwitch.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.toggleRepeat = this.toggleRepeat.bind(this);
        this.toggleProirity = this.toggleProirity.bind(this);
        this.locactionSwitch = this.locactionSwitch.bind(this);

    }

    toggleSwitch = (value) => {

        this.setState({remindstate: value})

    }

    toggleRepeat = (value) => {

        this.setState({repeat: value})

    }

    toggleProirity = (value) => {

        this.setState({proirity: value})

    }

    locactionSwitch = (value) => {
        this.setState({remindLocation: value})
    }


    alarmSwitch = (value) =>{
        console.log("A value date has been picked: ", value);
        this.setState({alarm:value.toString()})
    }

    render(): React.ReactNode {
        return (
            <View>

                <View style={{flexDirection:'column'}}>
                    <View style={{flexDirection:'row',paddingRight:5,margin:10}}>
                        <Text
                            style={{fontSize: 20}}>
                            Remind me on a day
                        </Text>

                        <Switch
                            style={{marginLeft:180,paddingRight:5}}
                            onValueChange = {this.toggleSwitch}
                            value = {this.state.remindstate}/>

                    </View>

                    <View style={{flexDirection:'row',paddingRight:5,margin:10}}>
                        <Alarm handleDatePicked = {this.alarmSwitch} />
                        <Text>{this.state.alarm}</Text>

                    </View>
                    <View style={{flexDirection:'row',margin:10}}>
                        <Text
                            style={{fontSize: 20}}>
                            Repeat
                        </Text>
                        <Switch
                            style={{marginLeft:303}}
                            onValueChange = {this.toggleRepeat}
                            value = {this.state.repeat}/>
                    </View>
                </View>
                <View>
                    <View style={{flexDirection:'row',margin:10}}>
                        <Text
                            style={{fontSize: 20}}>
                            Remind me on at a location
                        </Text>
                        <Switch
                            style={{marginLeft:170}}
                            onValueChange = {this.locactionSwitch}
                            value = {this.state.remindLocation}/>
                    </View>

                </View>
                <View>
                    <View style={{flexDirection:'row',margin:10}}>
                        <Text
                            style={{fontSize: 20}}>
                            priority
                        </Text>
                        <Switch
                            style={{marginLeft:303}}
                            onValueChange = {this.toggleProirity}
                            value = {this.state.proirity}/>
                    </View>
                    <View style={{flexDirection:'row',margin:10}}>
                        <Text
                            style={{fontSize: 20}}>
                            notes
                        </Text>
                        <TextInput
                            style={{height: 40,margin:10}}
                            placeholder="notes"
                            onChangeText={(note) => this.setState({note:note})}
                        />
                    </View>

                </View>

            </View>
        );
    }

}