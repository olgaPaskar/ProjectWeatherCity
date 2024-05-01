import React, { useContext, useState } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { ThemeContext } from '../themeProviderComponent/ThemeProviderComponent';
import AvatarComponent from "../avatarComponent/AvatarComponent";
import LoginComponent from "../loginComponent/LoginComponent";
import './DrawerComponent.css';
import {i18n} from '../../config/i18n';

const DrawerComponent = ({ isOpen, onClose, avatar, login }) => {
    const { t } = useTranslation(); // Используем только функцию перевода t
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isRussianLocale, setIsRussianLocale] = useState(true);

    const toggleLocale = () => {
        const newLocale = isRussianLocale ? 'en' : 'ru';
        i18n.changeLanguage(newLocale);
        setIsRussianLocale(prevLocale => !prevLocale);
    };

    const handleThemeSwitch = () => {
        toggleTheme();
        onClose();
    };

    return (
        <I18nextProvider i18n={i18n}>
            <div className={`drawer ${isOpen ? 'open' : ''} ${theme}`}>
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <div className="user-profile">
                    <AvatarComponent avatar={avatar} />
                    <LoginComponent login={login} />
                </div>
                <div className="settings">
                    <div className="theme-toggle">
                        <h3>{t('Choose Theme')}:</h3>
                        <button onClick={handleThemeSwitch} className={theme === 'dark' ? 'active' : ''}>{t('Dark')}</button>
                        <button onClick={handleThemeSwitch} className={theme === 'light' ? 'active' : ''}>{t('Light')}</button>
                    </div>
                    <div className="locale-toggle">
                        <h3>{t('Change Language')}:</h3>
                        <button onClick={toggleLocale} className={isRussianLocale ? 'active' : ''}>{t('Русский')}</button>
                        <button onClick={toggleLocale} className={!isRussianLocale ? 'active' : ''}>{t('English')}</button>
                    </div>
                </div>
            </div>
        </I18nextProvider>
    );
};

export default DrawerComponent;














