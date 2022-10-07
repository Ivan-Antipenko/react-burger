import { loginRequest, refreshToken, registerRequest, updateTokenRequest } from "../../utils/api"
import { setCookie } from "../../utils/cookie"

export const REGISTER_FORM_CHANGE_VALUE = 'REGISTER_FORM_CHANGE_VALUE'
export const LOGIN_FORM_CHANGE_VALUE = 'LOGIN_FORM_SET_VALUE'

export const REGISTER_SENDING_REQUEST = 'REGISTER_SENDING_REQUEST'
export const REGISTER_SENDING_SUCCESS = 'REGISTER_SENDING_SUCCESS'
export const REGISTER_SENDING_FAILED = 'REGISTER_SENDING_FAILED'
export const LOGIN_SENDING_REQUEST = 'LOGIN_SENDING_REQUEST'
export const LOGIN_SENDING_SUCCESS = 'LOGIN_SENDING_SUCCESS'
export const LOGIN_SENDING_FAILED = 'LOGIN_SENDING_FAILED'
export const GET_USER_REQUEST = 'LOGIN_SENDING_REQUEST'
export const GET_USER_SUCCESS = 'LOGIN_SENDING_SUCCESS'
export const GET_USER_FAILED = 'LOGIN_SENDING_FAILED'
export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS'
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED'
export const CHECK_TOKEN_VALID = 'CHECK_TOKEN_VALID'
export const CHECK_TOKEN_INVALID = 'CHECK_TOKEN_INVALID'

export function setFormValue(field, value) {
    return function(dispatch) {
        dispatch({
            type: REGISTER_FORM_CHANGE_VALUE,
            field,
            value
        })
    }
}

export function setLoginValue(field, value) {
    return function(dispatch) {
        dispatch({
            type: LOGIN_FORM_CHANGE_VALUE,
            field,
            value
        })
    }
}

export function registration(name, email, pass) {
    return function(dispatch) {
        dispatch({
            type: REGISTER_SENDING_REQUEST,
        })
        registerRequest(name, email, pass)
    }
}

export function login(email, pass) {
    return function(dispatch) {
        dispatch({
            type: LOGIN_SENDING_REQUEST
        })
        loginRequest(email, pass)
        .then((res) => {
          const accessToken = res.accessToken.split("Bearer ")[1];
          const refreshToken = res.refreshToken;
          setCookie("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          return res
        })
        .then((res) => {
            dispatch({
                type: LOGIN_SENDING_SUCCESS,
                data: res
            })
        })
        .catch(() => {
            dispatch({
                type: LOGIN_SENDING_FAILED
            })
        })
    }
}


export function updateToken() {
    return function (dispatch) {
        dispatch({
            type: UPDATE_TOKEN_REQUEST
        })
        const token = localStorage.getItem('accessToken')
        refreshToken(token)
        .then((res) => {
            dispatch({
                type: UPDATE_TOKEN_REQUEST,
                token: res.accessToken
            })
        })
    }
}
  
