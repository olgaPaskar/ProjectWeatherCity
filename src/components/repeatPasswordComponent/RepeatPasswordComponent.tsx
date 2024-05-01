import React, { useState } from 'react';

const RepeatPasswordComponent = ({ repeatPassword, handleRepeatPasswordChange }) => {
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const handleToggleRepeatPasswordVisibility = () => {
        setShowRepeatPassword(!showRepeatPassword);
    };

    return (
        <div className="repeat-password-container">
            <div>
            <label htmlFor="repeatPassword">Repeat Password:</label>
            <br />
                <input
                    type={showRepeatPassword ? 'text' : 'password'}
                    id="repeatPassword"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                />
                </div>
                <button
                    onClick={handleToggleRepeatPasswordVisibility}
                    title={showRepeatPassword ? 'Hide Password' : 'Show Password'}
                >
                    <i className="material-icons">
                        {showRepeatPassword ? 'visibility_off' : 'visibility'}
                    </i>
                </button>
            </div>
    )
};

export default RepeatPasswordComponent;



