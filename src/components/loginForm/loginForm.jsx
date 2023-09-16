import React, { useState } from 'react';
import './loginForm.scss';
import {GoogleLogin} from "@react-oauth/google";
import c1img from '../../../src/components/loginForm/img/c1img.png';
import c2img from '../../../src/components/loginForm/img/c2img.png';
import {IoIosArrowBack} from "react-icons/io";


const clientId = "187515703227-ipki1jn6tmq5c6dprpq5la00sqndm0aj.apps.googleusercontent.com"

const LoginForm = () => {
    const clientId = "187515703227-ipki1jn6tmq5c6dprpq5la00sqndm0aj.apps.googleusercontent.com"
    const [reverse , setReverse] = useState(true)
    const [none , setNone] = useState(false)
    const [isMasterMode, setIsMasterMode] = useState(true);
    const [toggleState, setToggleState] = useState(1);
    const oneSucces = (res) => {

        console.log('Current user:', res.profileobg)
    }
    const onFailure = (res) => {
        console.log('login failed',res)
    }
    const toggleMode = () => {
        setIsMasterMode(!isMasterMode);
        setToggleState(toggleState === 1 ? 2 : 1);
    };
    console.log(reverse)
    let str = c1img
    if (reverse === true){
        str = c1img
    }else {
        str = c2img
    }

    const hello = toggleState === 1 ? 65 : -1370;
    const lol = toggleState === 1 ? 0 : 729;
    return (
        <div id="login">
            <div className="container">
                <div className="login">
                    <IoIosArrowBack className="login--icon"/>
                    <div className="login--n1">
                        <div
                            style={{display:reverse ? 'block' : 'none'}}
                            className={`login--n1__a1 ${toggleState === 1}`}
                        >
                            <p>Вы мастер и хотите зарегистрироваться?</p>
                            <h2 style={{color:none ? 'red' : '' ,transition:'0.8s' }} onClick={() => {
                                toggleMode()
                                setTimeout(() => {
                                    setReverse(false)
                                }, 200)
                            }}>Для Мастеров</h2>
                        </div>
                        <div
                            style={{display:reverse ? 'none' : 'block'}}
                            className={`login--n1__a2 ${toggleState === 2}`}
                        >
                            <h2 style={{color:none ? 'red' : '' ,transition:'0.8s' }} onClick={() => {
                                toggleMode()
                                setTimeout(() => {
                                    setReverse(true)
                                }, 200)
                            }}>Для Пользователя</h2>
                        </div>
                    </div>
                    <div className="login--cnt">
                        <div style={{marginLeft:`${lol}px`, transition: '0.6s' , background:`url(${str})`}} className="login--cnt__images">
                        </div>
                        <div style={{marginLeft:`${hello}px`, transition: '0.6s'}} className="login--cnt__c1">
                            <h1 style={{transition:"1s"}}>{none ? 'Войти' : 'Регистрация'}</h1>
                            <p>{none ? 'Заполните данные для того что-бы Войти' : 'Заполните данные для регистрации'}</p>
                            <button
                                className="login--cnt__c1--google"
                                clientId={clientId}
                                onSucces={oneSucces}
                                onFailure={onFailure}
                                cookiePolicy={'single_host'}
                                isSignedIn={true}
                            >Вход через Google</button>
                            <h2>Или</h2>
                            <input
                                type="text"
                                placeholder="Никнэйм*"
                                pattern="[^,?]*"
                                title="Пожалуйста, используйте только буквы, цифры и символы, кроме запятых и вопросительных знаков."
                                onInput={(e) => {
                                    const inputValue = e.target.value;
                                    const sanitizedValue = inputValue.replace(/[?.,/'";:}{=+!%^$~_-]/g, ''); // Удаляем вопросительные знаки
                                    e.target.value = sanitizedValue;
                                }}
                            />
                            <input style={{display:none ? 'none' : 'block'}}
                                placeholder="Адрес или Почта*"
                            />
                            <input
                                type="password"
                                placeholder="Пароль"
                            />
                            <input style={{display:none ? 'none' : 'block'}}
                                type="password"
                                placeholder="Повторить пароль*"
                            />
                            <div style={{marginTop : none ? '242px' : ''}} className="login--cnt__c1--btn">
                                <button  className="login--cnt__c1--btn__btn1">
                                    {none ? 'войти' : 'Создать аккаунт'}
                                </button>
                                    <button onClick={() => setNone(!none)}  className="login--cnt__c1--btn__btns">

                                        {none ? 'Регистрация' : 'войти'}
                                    </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
