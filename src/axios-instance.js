import axios from 'axios';

const $http = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'Authorization': '',
        'Cache-Control': 'no-cache,no-store',
        'Pragma': 'no-cache',
        'Expires': '0'
    },
});

export default $http;
