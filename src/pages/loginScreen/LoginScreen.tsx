import { useDispatch, useSelector } from 'react-redux';
import './LoginScreen.css';

import AvatarComponent from '../../components/avatarComponent/AvatarComponent';
import LoginComponent from '../../components/loginComponent/LoginComponent';
import PasswordComponent from '../../components/passwordComponent/PasswordComponent';
import RepeatPasswordComponent from '../../components/repeatPasswordComponent/RepeatPasswordComponent';
import RegisterButton from '../../components/registerButtonComponent/RegisterButton';
import {
    setAvatar,
    setError,
    setLogin,
    setPassword,
    setRepeatPassword,
} from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginScreen() {
    const login = useSelector(state => state.auth.login);
    const password = useSelector(state => state.auth.password);
    const repeatPassword = useSelector(state => state.auth.repeatPassword);
    const avatar = useSelector(state => state.auth.avatar);
    const error = useSelector(state => state.auth.error);
    const navigation = useNavigate();

    const dispatch = useDispatch();

    const handleLoginChange = (event) => {
        dispatch(setLogin(event.target.value));
        dispatch(setError(''));
    };

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
        dispatch(setError(''));
    };

    const handleRepeatPasswordChange = (event) => {
        dispatch(setRepeatPassword(event.target.value));
        dispatch(setError(''));
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    dispatch(setAvatar(reader.result));
                };
                reader.readAsDataURL(file);
            } else {
                dispatch(setError('Please upload an image.'));
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isLoginValid(login)) {
            dispatch(setError('Login must be between 6 and 12 characters long.'));
            return;
        }

        if (!isPasswordValid(password)) {
            dispatch(setError('Password must be between 8 and 14 characters long, contain at least one uppercase letter and one digit, without punctuation marks.'));
            return;
        }

        if (password !== repeatPassword) {
            dispatch(setError('Passwords do not match.'));
            return;
        }

        if (!avatar) {
            dispatch(setError('Please upload an avatar.'));
            return;
        }
        navigation('/main');
    };

    const isLoginValid = (login) => {
        return login.length >= 6 && login.length <= 12;
    };

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,14}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="login-screen">
            <h1>Welcome to WeatherCity!</h1>
            <form onSubmit={handleSubmit}>
                <AvatarComponent avatar={avatar} handleAvatarChange={handleAvatarChange} />
                <LoginComponent login={login} handleLoginChange={handleLoginChange} />
                {error && <div className="error">{error}</div>}
                <PasswordComponent password={password} handlePasswordChange={handlePasswordChange} />
                <RepeatPasswordComponent repeatPassword={repeatPassword} handleRepeatPasswordChange={handleRepeatPasswordChange} />
                <RegisterButton onClick={handleSubmit} isDisabled={!login || !password || !avatar || !repeatPassword} />
            </form>
        </div>
    );
}

export default LoginScreen;

























