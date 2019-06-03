import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/todolist/';

export {getTodoList, saveTodoList};

function getTodoList(user) {
    const url = `${BASE_URL}${user}`;
    return axios.get(url).then(response => response.data);
}

function saveTodoList(user,time,location,proirity,alarm,remind,repeat) {
    const url = `${BASE_URL}${user}`;
    return axios.get(url).then(response => response.data);
}