import React from 'react';

const RegisterButton = ({ onClick, isDisabled }) => {
    return (
        <button onClick={onClick} disabled={isDisabled}>
            Log in
        </button>
    );
};

export default RegisterButton;

