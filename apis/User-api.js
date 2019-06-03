import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/users/';

export {getUser};

function getUser(user,password) {
    const url = `${BASE_URL}${user}`;
    return axios.get(url).then(response => response.data);
}