
import { setCookie } from "../../utils/cookie";
import {REGISTER_SENDING_REQUEST,
        REGISTER_SENDING_SUCCESS, 
        REGISTER_SENDING_FAILED,
        REGISTER_FORM_CHANGE_VALUE,
        LOGIN_SENDING_REQUEST,
        LOGIN_SENDING_SUCCESS,
        LOGIN_SENDING_FAILED,
        LOGIN_FORM_CHANGE_VALUE,
        PROFILE_FORM_CHANGE_VALUE,
        UPDATE_TOKEN_REQUEST,
        UPDATE_TOKEN_SUCCESS,
        UPDATE_TOKEN_FAILED,
        CHECK_TOKEN_VALID,
        CHECK_TOKEN_INVALID,
        LOGOUT_SENDING_REQUEST,
        LOGOUT_SENDING_SUCCESS,
        RECOVERY_PASS_REQUEST,
        RECOVERY_PASS_SUCCESS,
        RECOVERY_PASS_FAILED,
        GET_USER_REQUEST,
        GET_USER_SUCCESS,
        GET_USER_FAILED,
        CHANGE_USER_REQUEST,
        CHANGE_USER_SUCCESS,
        CHANGE_USER_FAILED,
        RESET_PASS_REQUEST,
        RESET_PASS_SUCCESS,
        RESET_PASS_FAILED
       } from "../actions/register";

const initialState = {

    isLoading: false,
    isError: false,
    isLogin: false,
    isRecoveryProcess: false,
    registrationComplete: false,
    user: {
        email: '',
        pass: '',
        name: '',
    },

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
        case PROFILE_FORM_CHANGE_VALUE: {
            return {
                ...state,
                user: {
                    ...state.user,
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
            const accessToken = action.data.accessToken.split("Bearer ")[1];
            const refreshToken = action.data.refreshToken;
            setCookie("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("password", state.form.pass);
            return {
                ...state,
                isLoading: false,
                isLogin: true,
                form: {
                    ...state.form,
                    email: '',
                    pass: '',
                },

                user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                    pass: localStorage.getItem('password')
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
        case LOGOUT_SENDING_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGOUT_SENDING_SUCCESS: {
            return {
                ...state,
                isLogin: false,
                regisrationComplete: false,
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
            const newCoockie = action.data.accessToken.split("Bearer ")[1]
            const newToken = action.data.refreshToken
            localStorage.setItem("refreshToken", newToken);
            setCookie('accessToken', newCoockie)
            return {
                ...state,
                   isLoading: false,
                   isLogin: true,
            }
        }
        case UPDATE_TOKEN_FAILED: {
            return {
                ...state,
                   isLoading: false,
                   isLogin: false
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
        case RECOVERY_PASS_REQUEST: {
            return {
                ...state,
                   isLoading: true,
                   isRecoveryProcess: true
            }
        }
        case RECOVERY_PASS_SUCCESS: {
            return {
                ...state,
                   isLoading: false,
            }
        }
        case RECOVERY_PASS_FAILED: {
            return {
                ...state,
                   isLoading: false,
                   isError: true
            }
        }
        case RESET_PASS_REQUEST: {
            return {
                ...state,
                   isLoading: true,
            }
        }
        case RESET_PASS_SUCCESS: {
            return {
                ...state,
                   isLoading: false,
                   isRecoveryProcess: false
            }
        }
        case RESET_PASS_FAILED: {
            return {
                ...state,
                   isLoading: false,
                   isRecoveryProcess: false,
                   isError: true
            }
        }
        case GET_USER_REQUEST: {
            return {
                ...state,
                   isLoading: true,   
            }
        }
        case GET_USER_SUCCESS: {
             return {
                ...state,
                   user: {
                    ...state.user,
                    email: action.data.user.email,
                    name: action.data.user.name,
                    pass: localStorage.getItem('password')
                   },
                   isLoading: false,
                   isLogin: true,
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                   isLogin: false  
            }
        }
        case CHANGE_USER_REQUEST: { 
            return {
                ...state,
                   isLoading: true 
            }
        }
        case CHANGE_USER_SUCCESS: { 
            return {
                ...state,
                   isLoading: false,
                   user: {
                    ...state.user,
                    email: action.data.email,
                    name: action.data.name,
                    pass: localStorage.getItem('password')
                   },
            }
        }
        case CHANGE_USER_FAILED: { 
            return {
                ...state,
                   isLoading: false,
                   isError: true
            }
        }
        default: {
            return state
        }
    }
} 