import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from './pages/loginScreen/LoginScreen';
import MainScreen from './pages/mainScreen/MainScreen';

const App = () => {
    return (
        <Provider store={store}>
        <Router>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={<LoginScreen />}
                />
                <Route
                    path="/main"
                    element={<MainScreen />}
                />
            </Routes>
        </Router>
        </Provider>
    );
};

export default App;






