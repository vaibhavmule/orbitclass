import axios from 'axios';
import { rootURL } from './API'

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

export const register = (email, password) => {
    console.log(email, password, {user: {email, password}})
    return axios
        .post(`${rootURL}/users`, {user: {email, password}})
        .then(function(res) {
            return res
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const login = (email, password) => {
    return getToken(email, password)
}

export const getToken = (email, password) => {
    console.log({user: {email, password}})
    return axios
        .post(`${rootURL}/users/login`, { 
            user: {
                email: email,
                password: password
            }
        })
        .then(function(res) {
            localStorage.token = res.data.token
            return res
        })
        .catch(function(error) {
            console.log(error);
        });
}

export const logout = () => delete localStorage.token

export const loggedIn = () => !!localStorage.token