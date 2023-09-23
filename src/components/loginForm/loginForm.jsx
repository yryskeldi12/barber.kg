import React, { useState } from "react";
import "./loginForm.scss";
import barberImgPath from "./img/c1img.png";
import userImgPath from "./img/c2img.png";
import { IoIosArrowBack } from "react-icons/io";

const clientId =
    "187515703227-ipki1jn6tmq5c6dprpq5la00sqndm0aj.apps.googleusercontent.com";

const LoginForm = () => {
    return (
        <div className="container">
            <div className="user-form">
                <div className="user-form__left-side">
                    <div className="user-form__barber">
                        <p className="user-form__barber-question">
                            Вы мастер и хотите зарегистрироваться?
                        </p>
                        <span className="user-form__barber-title">Для Мастеров</span>
                    </div>
                    <img className="user-form__bg-img" src={barberImgPath} alt="Master" />
                </div>

                <div className="user-form__right-side">
                    <div className="register-form">
                        <div className="register-form__wrap">
                            <h2 className="register-form__title">Регистрация</h2>
                            <span className="register-form__subtitle">Заполните данные для регистрации</span>
                            <button className="user-form__btn user-form__btn--active register-form__enter">Вход через Google</button>
                            <span className="register-form__extra">Или</span>
                        </div>

                        <div className="register-form__fields">
                            <input
                                className="register-form__field"
                                type="text"
                                placeholder="Никнэйм"
                            />
                            <input
                                className="register-form__field"
                                type="text"
                                placeholder="Адрес или Почта"
                            />
                            <input
                                className="register-form__field"
                                type="password"
                                placeholder="Пароль"
                            />
                            <input
                                className="register-form__field"
                                type="password"
                                placeholder="Повторить пароль"
                            />
                        </div>
                        <div className="user-form__btns">
                            <button className="user-form__btn user-form__btn--active register-form__btn">Создать аккаунт</button>
                            <button className="user-form__btn register-form__btn">Войти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
