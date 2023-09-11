import React from 'react';
import arr from "../Anketa/img/arr.svg"
import './anketa.scss'
import logo from "../Anketa/img/logo.png"
import Location from "./location/location";
import Servi from "./Servi/servi";


const Anketa = () => {
    return (
        <div id="anketa">
            <div className="container">
                <div className="anketa">
                    <img src={arr} alt=""/>
                    <h1>Анкета</h1>
                    <div className="anketa--text">
                        <div className="anketa--text__block">
                            <div className="anketa--text__block--input">
                                <input type="text" placeholder='Имя'/>
                                <select>
                                    <option>Барбер</option>
                                    <option>Парикхмахер</option>
                                    <option>Визажист</option>
                                    <option>Химик</option>
                                </select>
                                <select>
                                    <option>Опыт работы</option>
                                    <option>Стажер</option>
                                    <option>Менее 6 месяцев</option>
                                    <option>1 год</option>
                                    <option>1-3 года</option>
                                    <option>3-5 года</option>
                                    <option>Более 5 года</option>
                                </select>
                                <input type="text" placeholder='О себе'/>
                                <select>
                                    <option>Район</option>
                                    <option>Моссовет</option>
                                    <option>Цум</option>
                                    <option>Дордой</option>
                                    <option>Ак ордо</option>
                                    <option>1-мкр</option>
                                    <option>Восток 5</option>
                                </select>
                            </div>
                        </div>
                        <img src={logo} alt=""/>
                    </div>

                    <div className="anketa--text2">
                        <div className="anketa--text2__block">
                            <h3>Телефон:</h3>
                            <h3>Время:</h3>
                            <h3>Место работы:</h3>
                            <h3>Знания языка:</h3>
                        </div>
                        <div className="anketa--text2__input">
                            <input type="text" placeholder="+996"/>
                            <div className="anketa--text2__input2">
                                <input type="text" placeholder="от 10:00"/>
                                <input type="text" placeholder="до 22:00"/>
                            </div>
                            <div className="anketa--text2__input">
                                <div className="anketa--text2__checkbox">
                                    <div className="anketa--text2__input3">
                                        <h1>Салон</h1>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="anketa--text2__input3">
                                        <h1>Салон</h1>
                                        <input type="checkbox"/>
                                    </div>
                                </div>
                                <div className="anketa--text2__checkbox">
                                    <div className="anketa--text2__input3">
                                        <h1>Русский</h1>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="anketa--text2__input3">
                                        <h1>Кыргызкий</h1>
                                        <input type="checkbox"/>
                                    </div>
                                    <div className="anketa--text2__input3">
                                        <h1>Англиский</h1>
                                        <input type="checkbox"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Servi/>
            <Location/>
        </div>
    );
};

export default Anketa;