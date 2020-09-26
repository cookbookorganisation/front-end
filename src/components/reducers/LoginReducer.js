import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/LogIn";
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_ERROR } from "../actions/SignUp";

export const initialState = {
    email: "",
    id: null,
    token: "",
    isLoading: false,
    error: null
}

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state, 
                email: action.payload.email,
                id: action.payload.id,
                toaken: action.payload.token,
                isLoading: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case SIGNUP_START:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                email: action.payload.email,
                id: action.payload.id,
                token: action.payload.token,
                isLoading: false,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
   
};
