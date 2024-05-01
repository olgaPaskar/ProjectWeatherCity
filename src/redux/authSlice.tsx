import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    login: '',
    password: '',
    avatar: null,
    error: '',
    showRegisterModal: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogin(state, action) {
            state.login = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        setAvatar(state, action) {
            state.avatar = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        setRepeatPassword(state, action) {
            state.repeatPassword = action.payload;
        }
    }
});

export const { setLogin, setPassword, setAvatar, setError, setRepeatPassword } = authSlice.actions;

export const {reducer: authReducer} = authSlice;

