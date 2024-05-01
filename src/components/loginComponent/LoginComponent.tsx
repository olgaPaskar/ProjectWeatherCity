import React from 'react';

function LoginComponent({ login, handleLoginChange }) {
    return (
        <div className="form-group">
            <label htmlFor="login">Login:</label>
            <input
                type="text"
                id="login"
                value={login}
                onChange={handleLoginChange}
            />
        </div>
    );
}

export default LoginComponent;
