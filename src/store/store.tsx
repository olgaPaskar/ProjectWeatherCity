import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {authReducer} from '../redux/authSlice';

const rootReducer = combineReducers({
        auth: authReducer
    }
)

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat()
});

export default store;

