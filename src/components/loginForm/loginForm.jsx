import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./loginForm.scss";
import barberImgPath from "./img/c1img.png";
import userImgPath from "./img/c2img.png";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const clientId =
    "187515703227-ipki1jn6tmq5c6dprpq5la00sqndm0aj.apps.googleusercontent.com";

const LoginForm = () => {
    const [barberMode, setBarberMode] = useState(true)
    const [isShaking, setIsShaking] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    function toggleBarberMode() {
        handleShake()
        setBarberMode(!barberMode)
    }

    const handleShake = () => {
        setIsShaking(false);
        setTimeout(() => {
            setIsShaking(true);
        }, 300);
    };

    const formImgPath = barberMode ? barberImgPath : userImgPath

    return (
        <div className="container">
            <div className="user-form">
                <IoIosArrowBack className="user-form__icon" />
                <div className={`user-form__left-side ${isShaking ? "shake-left" : ""} }`} style={{ left: barberMode ? "0%" : "50%" }}>
                    <div
                        className="user-form__barber"
                        onClick={toggleBarberMode}>
                        {
                            barberMode && <p className="user-form__barber-question">
                                Вы мастер и хотите зарегистрироваться?
                            </p>
                        }
                        <span className="user-form__barber-title">Для {barberMode ? "Мастеров" : "Пользователя"}</span>
                    </div>
                    <img className="user-form__bg-img" src={formImgPath} alt="Barbershop" />
                </div>

                <div className={`user-form__right-side ${isShaking ? "shake-right" : ""}`}
                    style={{ left: barberMode ? "0%" : "-50%" }}
                >
                    {isSignUp ? <SignUp setIsSignUp={setIsSignUp} /> : <SignIn setIsSignUp={setIsSignUp} />}
                </div>
            </div>
        </div >
    );
};

export default LoginForm;
