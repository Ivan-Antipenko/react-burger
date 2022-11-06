import { Dispatch } from "redux"
import { getUser, loginRequest, logoutRequest, recoveryPass, refreshToken, registerRequest, resetPassRequest, updateUserInfo } from "../../utils/api"
import { deleteCookie, getCookie} from "../../utils/cookie"
import { IChangeUserInfo, IUpdateToken, IUserInfo} from "../types"
export const REGISTER_FORM_CHANGE_VALUE: 'REGISTER_FORM_CHANGE_VALUE' = 'REGISTER_FORM_CHANGE_VALUE'
export const PROFILE_FORM_CHANGE_VALUE: 'REGISTER_FORM_CHANGE_VALUE' = 'REGISTER_FORM_CHANGE_VALUE'
export const LOGIN_FORM_CHANGE_VALUE: 'LOGIN_FORM_SET_VALUE' = 'LOGIN_FORM_SET_VALUE'

export const REGISTER_SENDING_REQUEST: 'REGISTER_SENDING_REQUEST' = 'REGISTER_SENDING_REQUEST'
export const REGISTER_SENDING_SUCCESS: 'REGISTER_SENDING_SUCCESS' = 'REGISTER_SENDING_SUCCESS'
export const REGISTER_SENDING_FAILED: 'REGISTER_SENDING_FAILED' = 'REGISTER_SENDING_FAILED'
export const LOGIN_SENDING_REQUEST: 'LOGIN_SENDING_REQUEST' = 'LOGIN_SENDING_REQUEST'
export const LOGIN_SENDING_SUCCESS: 'LOGIN_SENDING_SUCCESS' = 'LOGIN_SENDING_SUCCESS'
export const LOGIN_SENDING_FAILED: 'LOGIN_SENDING_FAILED' = 'LOGIN_SENDING_FAILED'
export const LOGOUT_SENDING_REQUEST: 'LOGOUT_SENDING_REQUEST' = 'LOGOUT_SENDING_REQUEST'
export const LOGOUT_SENDING_SUCCESS: 'LOGOUT_SENDING_SUCCESS' = 'LOGOUT_SENDING_SUCCESS'
export const LOGOUT_SENDING_FAILED: 'LOGOUT_SENDING_FAILED' = 'LOGOUT_SENDING_FAILED'
export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST'
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS'
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED'
export const UPDATE_TOKEN_REQUEST: 'UPDATE_TOKEN_REQUEST' = 'UPDATE_TOKEN_REQUEST'
export const UPDATE_TOKEN_SUCCESS: 'UPDATE_TOKEN_SUCCESS' = 'UPDATE_TOKEN_SUCCESS'
export const UPDATE_TOKEN_FAILED: 'UPDATE_TOKEN_FAILED' = 'UPDATE_TOKEN_FAILED'
export const CHECK_TOKEN_VALID: 'CHECK_TOKEN_VALID' = 'CHECK_TOKEN_VALID'
export const CHECK_TOKEN_INVALID: 'CHECK_TOKEN_INVALID' = 'CHECK_TOKEN_INVALID'
export const RECOVERY_PASS_REQUEST: 'RECOVERY_PASS_REQUEST' = 'RECOVERY_PASS_REQUEST'
export const RECOVERY_PASS_SUCCESS: 'RECOVERY_PASS_SUCCESS' = 'RECOVERY_PASS_SUCCESS'
export const RECOVERY_PASS_FAILED: 'RECOVERY_PASS_FAILED' = 'RECOVERY_PASS_FAILED'
export const RESET_PASS_REQUEST: 'RESET_PASS_REQUEST' = 'RESET_PASS_REQUEST'
export const RESET_PASS_SUCCESS: 'RESET_PASS_SUCCESS' = 'RESET_PASS_SUCCESS'
export const RESET_PASS_FAILED: 'RESET_PASS_FAILED' = 'RESET_PASS_FAILED'
export const CHANGE_USER_REQUEST: 'CHANGE_USER_REQUEST' = 'CHANGE_USER_REQUEST'
export const CHANGE_USER_SUCCESS: 'CHANGE_USER_SUCCESS' = 'CHANGE_USER_SUCCESS'
export const CHANGE_USER_FAILED: 'CHANGE_USER_FAILED' = 'CHANGE_USER_FAILED'


export type TRegisterActions = 
| IRegisterFormChangeValue 
| ILoginFormChangeValue 
| IProfileFormChangeValue 
| IRegisterSendRequest 
| IRegisterSendSuccess 
| IRegisterSendFailed
| ILoginSendRequest
| ILoginSendSuccess
| ILoginSendFailed
| ILogoutSendRequest
| ILogoutSendSuccess
| ILogoutSendFailed
| IUpdateTokenRequest
| IUpdateTokenSuccess
| IUpdateTokenFailed
| IRecoveryPassRequest
| IRecoveryPassSuccess
| IRecoveryPassFailed
| IResetPassRequest
| IResetPassSuccess
| IResetPassFailed
| IGetUserRequest
| IGetUserSuccess
| IGetUserFailed
| IChangeUserRequest
| IChangeUserSuccess
| IChangeUserFailed


export interface IRegisterFormChangeValue {
    readonly type: typeof REGISTER_FORM_CHANGE_VALUE
    field: string,
    value: string
}

export interface ILoginFormChangeValue {
    readonly type: typeof LOGIN_FORM_CHANGE_VALUE
    field: string,
    value: string
}

export interface IProfileFormChangeValue {
    readonly type: typeof PROFILE_FORM_CHANGE_VALUE
    field: string,
    value: string
}

export interface IRegisterSendRequest {
    readonly type: typeof REGISTER_SENDING_REQUEST
}

export interface IRegisterSendSuccess {
    readonly type: typeof REGISTER_SENDING_SUCCESS
}

export interface IRegisterSendFailed {
    readonly type: typeof REGISTER_SENDING_FAILED
}

export interface ILoginSendRequest {
    readonly type: typeof LOGIN_SENDING_REQUEST
}

export interface ILoginSendSuccess {
    readonly type: typeof LOGIN_SENDING_SUCCESS
    readonly data: IUserInfo
}

export interface ILoginSendFailed {
    readonly type: typeof LOGIN_SENDING_FAILED
}

export interface ILogoutSendRequest {
    readonly type: typeof LOGOUT_SENDING_REQUEST
}

export interface ILogoutSendSuccess {
    readonly type: typeof LOGOUT_SENDING_SUCCESS
}

export interface ILogoutSendFailed {
    readonly type: typeof LOGOUT_SENDING_FAILED
}

export interface IUpdateTokenRequest {
    readonly type: typeof UPDATE_TOKEN_REQUEST
}

export interface IUpdateTokenSuccess {
    readonly type: typeof UPDATE_TOKEN_SUCCESS
    readonly data: IUpdateToken
}

export interface IUpdateTokenFailed {
    readonly type: typeof UPDATE_TOKEN_FAILED
}

export interface IRecoveryPassRequest {
    readonly type: typeof RECOVERY_PASS_REQUEST
}

export interface IRecoveryPassSuccess {
    readonly type: typeof RECOVERY_PASS_SUCCESS
}

export interface IRecoveryPassFailed {
    readonly type: typeof RECOVERY_PASS_FAILED
}

export interface IResetPassRequest {
    readonly type: typeof RESET_PASS_REQUEST
}

export interface IResetPassSuccess {
    readonly type: typeof RESET_PASS_SUCCESS
}

export interface IResetPassFailed {
    readonly type: typeof RESET_PASS_FAILED
}

export interface IGetUserRequest {
    readonly type: typeof GET_USER_REQUEST
}

export interface IGetUserSuccess {
    readonly type: typeof GET_USER_SUCCESS
    readonly data: IUserInfo
}

export interface IGetUserFailed {
    readonly type: typeof GET_USER_FAILED
}

export interface IChangeUserRequest {
    readonly type: typeof CHANGE_USER_REQUEST
}

export interface IChangeUserSuccess {
    readonly type: typeof CHANGE_USER_SUCCESS
    readonly data: IChangeUserInfo
}

export interface IChangeUserFailed {
    readonly type: typeof CHANGE_USER_FAILED
}


export function setFormValue(field: string, value: string | number) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: REGISTER_FORM_CHANGE_VALUE,
            field,
            value
        })
    }
}

export function setLoginValue(field: string, value: string | number) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: LOGIN_FORM_CHANGE_VALUE,
            field,
            value
        })
    }
}

export function setProfileValue(field: string, value: string | number) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: PROFILE_FORM_CHANGE_VALUE,
            field,
            value
        })
    }
}

export function registration(name: string, email: string, pass: string) {
    return function(dispatch: Dispatch) {
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

export function login(email: string, pass: string) {
    return function(dispatch: Dispatch) {
        dispatch({
            type: LOGIN_SENDING_REQUEST
        })
        loginRequest(email, pass)
        .then((res) => {
            console.log(res)
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
    return function(dispatch: Dispatch) {
        dispatch({
            type: LOGOUT_SENDING_REQUEST
        })
        logoutRequest()
        .then(() => {
            deleteCookie('accessToken')
            localStorage.removeItem("refreshToken")
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
    return function (dispatch: Dispatch) {
        dispatch({
            type: UPDATE_TOKEN_REQUEST
        })
        const token = localStorage.getItem('refreshToken')
        if (token) {
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
}

export function updatePass(email: string) {
    return function (dispatch: Dispatch) {
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

export function resetPass(pass: string, code: string) {
    return function (dispatch: Dispatch) {
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
    return function (dispatch: Dispatch) {
        dispatch({
            type: GET_USER_REQUEST
        })
        const token = getCookie("accessToken")
        if (token) {
            getUser(token)
            .then((res) => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    data: res
                })
            })
            .catch(() => { 
                updateToken();
                const newToken = getCookie("accessToken")
                if(newToken) {
                    getUser(newToken)
                    .then((res) => {
                        dispatch({
                        type: GET_USER_SUCCESS,
                        data: res
                    })
                })
                .catch(() => {
                    dispatch({
                        type: GET_USER_FAILED
                    })
                })

                }
            })
        }  
    }
}

export function updateUser(name: string, email: string, pass: string) {
    return function (dispatch: Dispatch) {
      dispatch({
        type: CHANGE_USER_REQUEST,
      });
      const token = getCookie("accessToken")
      if (token) {
        updateUserInfo(name, email, pass, token)
        .then((res) => {
          dispatch({
            type: CHANGE_USER_SUCCESS,
            data: res.user,
          });
        })
        .catch(() => {
            const token = localStorage.getItem('refreshToken')
            if (token) {
                refreshToken(token)
            .then((res) => {
                dispatch({
                    type: UPDATE_TOKEN_SUCCESS,
                    data: res
                })
            })
            .then(() => {
                const token: any = getCookie("accessToken")
                updateUserInfo(name, email, pass, token)
                .then((res) => {
                    dispatch({
                        type: CHANGE_USER_SUCCESS,
                        data: res.user,
                      });
                })
            })
            .catch(() => {
                dispatch({
                    type: CHANGE_USER_FAILED,
                });
                })
        }
        });
    }
    };
}
  
