
import {REGISTER_SENDING_REQUEST,
        REGISTER_SENDING_SUCCESS, 
        REGISTER_SENDING_FAILED,
        REGISTER_FORM_CHANGE_VALUE,
        LOGIN_SENDING_REQUEST,
        LOGIN_SENDING_SUCCESS,
        LOGIN_SENDING_FAILED,
        LOGIN_FORM_CHANGE_VALUE,
        UPDATE_TOKEN_REQUEST,
        UPDATE_TOKEN_SUCCESS,
        UPDATE_TOKEN_FAILED,
        CHECK_TOKEN_VALID,
        CHECK_TOKEN_INVALID

       } from "../actions/register";

const initialState = {

    isLoading: false,
    isError: false,
    isLogin: false,
    user: null,

    form: {
        email: "",
        pass: "",
        name: "",
    },

}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_SENDING_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case REGISTER_SENDING_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                form: {
                    email: "",
                    pass: "",
                    name: ""
                }
            }
        }
        case REGISTER_SENDING_FAILED: {
            return {
                ...state,
                isError: true,
            }
        }
        case REGISTER_FORM_CHANGE_VALUE: {
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.field]: action.value
                }    
            }
        }
        case LOGIN_SENDING_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_SENDING_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                form: {
                    ...state.form,
                    email: '',
                    pass: '',
                },
            }
        }
        case LOGIN_SENDING_FAILED: {
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        }
        case LOGIN_FORM_CHANGE_VALUE: {
            return {
                ...state,
                   form: {
                    ...state.form,
                    [action.field]: action.value
                }      
            }
        }
        case UPDATE_TOKEN_REQUEST: {
            return {
                ...state,
                   isLoading: true,  
            }
        }
        case UPDATE_TOKEN_SUCCESS: {
            sessionStorage.setItem(action.token)
            return {
                ...state,
                   isLoading: false,
            }
        }
        case UPDATE_TOKEN_FAILED: {
            return {
                ...state,
                   isLoading: false,
                   isError: true
            }
        }
        case CHECK_TOKEN_VALID: {
            return {
                ...state,
                   isLogin: true
            }
        }
        case CHECK_TOKEN_INVALID: {
            return {
                ...state,
                   isLogin: false
            }
        }
        default: {
            return state
        }
    }
} 