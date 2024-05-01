import React, { useState } from 'react';

const PasswordComponent = ({ password, handlePasswordChange }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="password-container">
            <div>
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button
                    onClick={handleTogglePasswordVisibility}
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                >
                    <i className="material-icons">
                        {showPassword ? 'visibility_off' : 'visibility'}
                    </i>
                </button>
            </div>

        </div>
    );
};

export default PasswordComponent;






