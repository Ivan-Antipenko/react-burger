
import { getUser, loginRequest, logoutRequest, recoveryPass, refreshToken, registerRequest, resetPassRequest, updateUserInfo } from "../../utils/api"
import { deleteCookie, getCookie, setCookie} from "../../utils/cookie"
export const REGISTER_FORM_CHANGE_VALUE = 'REGISTER_FORM_CHANGE_VALUE'
export const PROFILE_FORM_CHANGE_VALUE = 'PROFILE_FORM_SET_VALUE'
export const LOGIN_FORM_CHANGE_VALUE = 'LOGIN_FORM_SET_VALUE'

export const REGISTER_SENDING_REQUEST = 'REGISTER_SENDING_REQUEST'
export const REGISTER_SENDING_SUCCESS = 'REGISTER_SENDING_SUCCESS'
export const REGISTER_SENDING_FAILED = 'REGISTER_SENDING_FAILED'
export const LOGIN_SENDING_REQUEST = 'LOGIN_SENDING_REQUEST'
export const LOGIN_SENDING_SUCCESS = 'LOGIN_SENDING_SUCCESS'
export const LOGIN_SENDING_FAILED = 'LOGIN_SENDING_FAILED'
export const LOGOUT_SENDING_REQUEST = 'LOGOUT_SENDING_REQUEST'
export const LOGOUT_SENDING_SUCCESS = 'LOGOUT_SENDING_SUCCESS'
export const LOGOUT_SENDING_FAILED = 'LOGOUT_SENDING_FAILED'
export const GET_USER_REQUEST = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'
export const UPDATE_TOKEN_REQUEST = 'UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_SUCCESS = 'UPDATE_TOKEN_SUCCESS'
export const UPDATE_TOKEN_FAILED = 'UPDATE_TOKEN_FAILED'
export const CHECK_TOKEN_VALID = 'CHECK_TOKEN_VALID'
export const CHECK_TOKEN_INVALID = 'CHECK_TOKEN_INVALID'
export const RECOVERY_PASS_REQUEST = 'RECOVERY_PASS_REQUEST'
export const RECOVERY_PASS_SUCCESS = 'RECOVERY_PASS_SUCCESS'
export const RECOVERY_PASS_FAILED = 'RECOVERY_PASS_FAILED'
export const RESET_PASS_REQUEST = 'RESET_PASS_REQUEST'
export const RESET_PASS_SUCCESS = 'RESET_PASS_SUCCESS'
export const RESET_PASS_FAILED = 'RESET_PASS_FAILED'
export const CHANGE_USER_REQUEST = 'CHANGE_USER_REQUEST'
export const CHANGE_USER_SUCCESS = 'CHANGE_USER_SUCCESS'
export const CHANGE_USER_FAILED = 'CHANGE_USER_FAILED'



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

export function setProfileValue(field, value) {
    return function(dispatch) {
        dispatch({
            type: PROFILE_FORM_CHANGE_VALUE,
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
        .then(() => {
            dispatch({
                type: REGISTER_SENDING_SUCCESS,
            })
        })
        .catch(() => {
            dispatch({
                type: REGISTER_SENDING_FAILED,
            })
        })
    }
}

export function login(email, pass) {
    return function(dispatch) {
        dispatch({
            type: LOGIN_SENDING_REQUEST
        })
        loginRequest(email, pass)
        .then((res) => {
            dispatch({
                type: LOGIN_SENDING_SUCCESS,
                data: res,
            })
        })
        .catch(() => {
            dispatch({
                type: LOGIN_SENDING_FAILED
            })
        })
    }
}

export function logout() {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_SENDING_REQUEST
        })
        logoutRequest()
        .then(() => {
            deleteCookie('accessToken')
            localStorage.removeItem("refreshToken", refreshToken)
        })
        .then(() => {
            dispatch({
                type: LOGOUT_SENDING_SUCCESS,
            })
        })
        .catch(() => {
            dispatch({
                type: LOGOUT_SENDING_FAILED
            })
        })
    }
}


export function updateToken() {
    return function (dispatch) {
        dispatch({
            type: UPDATE_TOKEN_REQUEST
        })
        const token = localStorage.getItem('refreshToken')
        refreshToken(token)
        .then((res) => {
            dispatch({
                type: UPDATE_TOKEN_SUCCESS,
                data: res
            })
        })
        .catch(() => {
            dispatch({
                type: UPDATE_TOKEN_FAILED,
            })
        })
    }
}

export function updatePass(email) {
    return function (dispatch) {
        dispatch({
            type: RECOVERY_PASS_REQUEST
        })
        recoveryPass(email)
        .then(() => {
            dispatch({
                type: RECOVERY_PASS_SUCCESS,
            })
        })
        .catch(() => {
            dispatch({
                type: RECOVERY_PASS_FAILED,
            })
        })
    }
}

export function resetPass(pass, code) {
    return function (dispatch) {
        dispatch({
            type: RESET_PASS_REQUEST
        })
        resetPassRequest(pass, code)
        .then(() => {
            dispatch({
                type: RESET_PASS_SUCCESS,
            })
        })
        .catch(() => {
            dispatch({
                type: RESET_PASS_FAILED,
            })
        })
    }
}

export function getUserInfo() {
    return function (dispatch) {
        dispatch({
            type: GET_USER_REQUEST
        })
        const token = getCookie("accessToken")
        getUser(token)
        .then((res) => {
            dispatch({
                type: GET_USER_SUCCESS,
                data: res
            })
        })
        .catch(() => {
            dispatch({
                type: GET_USER_FAILED,
            })
        })
    }
}

export function updateUser(name, email, pass) {
    return function (dispatch) {
      dispatch({
        type: CHANGE_USER_REQUEST,
      });
      const token = getCookie("accessToken")
      updateUserInfo(name, email, pass, token)
        .then((res) => {
          dispatch({
            type: CHANGE_USER_SUCCESS,
            data: res.user,
          });
        })
        .catch(() => {
          dispatch({
            type: CHANGE_USER_FAILED,
          });
        });
    };
  }
  
