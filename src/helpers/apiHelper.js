import axios from 'axios'
import { baseURL } from '../config/apiConfig';

const performRequest = async (method, url, data) => {
    const token = localStorage.getItem("xyz-todos") || "";
    return await axios({
        baseURL: `${baseURL}`,
        url: url,
        method: method,
        data: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
        },
    }).then(res => {
        return res.data;
    })
}



export const loginReqest = async (email, password) => {
    return await performRequest(
        "POST",
        "/users/login",
        { password, email },
    );
};


export const signUpReqest = async (email, password) => {
    return await performRequest(
        "POST",
        "/users/signup",
        { password, email },
    );
};


export const todoFetchReqest = async () => {
    return await performRequest(
        "GET",
        "todos/getTodos",
    );
};

export const createTodo = async (title, description ) => {
    return await performRequest(
        "POST",
        "todos/getTodos",
        { title, description }
    );
};