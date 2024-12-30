import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginPayload, RegistrationPayload } from './authType';
import { authInitialState } from './authInitialState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    login: {
        email: '',
        password: '',
    },
    registration: {
        username: '',
        password: '',
        email: '',
    },
    loginError: {
        email: { isError: false, message: '' },
        password: { isError: false, message: '' },
    },
    registrationError: {
        username: { isError: false, message: '' },
        password: { isError: false, message: '' },
        email: { isError: false, message: '' },
    },
    token: '',
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Set login state
        setLogin(state, action: PayloadAction<LoginPayload>) {
            state.login = action.payload;
            state.loginError = initialState.loginError; // Clear login errors
        },
        // Set login errors
        setLoginError(
            state,
            action: PayloadAction<Partial<(typeof initialState)['loginError']>>,
        ) {
            state.loginError = { ...state.loginError, ...action.payload };
        },
        // Set registration state
        setRegistration(state, action: PayloadAction<RegistrationPayload>) {
            state.registration = action.payload;
            state.registrationError = initialState.registrationError; // Clear registration errors
        },
        // Set registration errors
        setRegistrationError(
            state,
            action: PayloadAction<
                Partial<(typeof initialState)['registrationError']>
            >,
        ) {
            state.registrationError = {
                ...state.registrationError,
                ...action.payload,
            };
        },
        // Reset all states
        resetAuthState(state) {
            return initialState;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.token = '';
            state.isAuthenticated = false;
            AsyncStorage.removeItem('authToken'); // Clear token from storage
        },
    },
});

export const {
    setLogin,
    setLoginError,
    setRegistration,
    setRegistrationError,
    resetAuthState,
    setToken,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
