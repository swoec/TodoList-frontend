import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppRegistry, Platform, StyleSheet, Text,TextInput,View, Button} from 'react-native';
import {getTodoList} from './../apis/TodoList-api'
import TodoListItem from '../components/TodoListItem'
import {RadioButton} from "react-native-paper";

export default class TodoList extends Component{
    static navigationOptions =({navigation})=>({
        title:'Main',
        headerRight:<Button title="edit" onPress={()=>navigation.navigate('Settings')}/>,
    }) ;

    constructor(props){
        super(props);
        this.state = {todolist:[],checked: 'first',};
    }

    getTodoLists() {
        const email = this.props.name;
        this.props.getTodoList(email).then(todolists => {
            this.setState({todolists});
        });
    }

    componentWillMount() {
        this.getTodoLists();
    }

    ToSetting=()=>{
        this.props.navigation.navigate('Settings')
    }

    render(): React.ReactNode {
        const {todolists,checked} = this.state
        return (
            <View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'first' }); }}
                    />
                    <Text style={{fontSize:20}}>Apply for Rush Digital  {'\n'}</Text>


                </View>

                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'second' }); }}
                    />
                    <Text style={{fontSize:20}}>Accept interview request  {'\n'}</Text>


                </View>

                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'third' }); }}
                    />
                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:20}}>!!! Delivery competency test  </Text>
                        <Text style={{fontSize:10}}>Today 1AM  </Text>
                    </View>

                </View>
                <View style={{flexDirection:'row'}}>
                    <RadioButton
                        value="fourth"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => { this.setState({ checked: 'fourth' }); }}
                    />

                    <View style={{flexDirection:'column'}}>
                        <Text style={{fontSize:20}}>Xmas Party </Text>
                        <Text style={{fontSize:10}}>25th Dec 1AM  </Text>
                    </View>


                </View>
                <View>
                    <Button title='Settings'
                            style={{borderRadius: '2', color:'green'}}
                            onPress={this.ToSetting}>Settings</Button>
                </View>
            </View>
        );
    }

}

TodoList.propTypes = {

    getTodoList: PropTypes.func,
};
TodoList.defaultProps = {getTodoList}

function renderTodolists(todolists) {
    // console.log(albums)
    return todolists
        .map(todolist => <TodoListItem key={todolist.id} todolist={todolist} />);
}

