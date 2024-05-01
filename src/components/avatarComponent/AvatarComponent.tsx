import React from 'react';
import defaultAvatar from '../../assets/Honorary_Members_placeholder_0.jpg';

function AvatarComponent({ avatar, handleAvatarChange }) {
    return (
        <div className="avatar-container">
            <label htmlFor="avatar" className="avatar-label">
                {avatar && <img src={avatar} alt="Avatar" className="avatar-preview" />}
                {!avatar && <img src={defaultAvatar} alt="Default avatar" className="default-avatar" />}
            </label>
            <input
                type="file"
                id="avatar"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: 'none' }}
            />
        </div>
    );
}

export default AvatarComponent;
