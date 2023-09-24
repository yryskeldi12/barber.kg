import React, { useState } from 'react';
import arr from "../Anketa/img/arr.svg"
import './anketa.scss'
import logo from "../Anketa/img/logo.png"
import Location from "./location/location";
import Servi from "./Servi/servi";
import Photo from "./Photo/Photo";
import { IoIosArrowDown } from "react-icons/io";


const Anketa = () => {
    const [arr1, setArr1] = useState(false)
    return (
        <div id="anketa">
            <div className="container">
                <div className="anketa">
                    <img src={arr} alt="" />
                    <h1>Анкета</h1>
                    <div className="anketa--text">
                        <div className="anketa--text__block">
                            <div className="anketa--text__block--input">
                                <input type="text" placeholder='Имя' />

                                <select onClick={() => setArr1(!arr1)}>
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
                                <input type="text" placeholder='О себе' />
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
                        <img src={logo} alt="" />
                    </div>

                    <div className="anketa--text2">
                        <div className="anketa--text2__block">
                            <h1>Телефон:</h1>
                            <div>
                                <h2>+996 |</h2>
                                <input type="number" placeholder='Введидте номер телефона' />
                            </div>
                        </div>
                        <div className="anketa--text2__block1">
                            <h1>Время:</h1>
                            <div>
                                <input type="text" placeholder='от 10:00' />
                                <input type="text" placeholder='до 22:00' />
                            </div>
                        </div>
                        <div className="anketa--text2__block2">
                            <h1>Место работы:</h1>
                            <div className='anketa--text2__block2--div lll'>
                                <div><h2>Салон</h2> <input type="checkbox" /></div>
                                <div><h2>Частный мастер</h2> <input type="checkbox" /></div>
                            </div>
                        </div>
                        <div className="anketa--text2__block3">
                            <h1>Место работы:</h1>
                            <div className='anketa--text2__block3--arr'>
                                <div><h2>Русский</h2> <input type="checkbox" /></div>
                                <div><h2>Кыргызкий</h2> <input type="checkbox" /></div>
                                <div><h2>Англиский</h2> <input type="checkbox" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Servi />
            <Location />
            <Photo />
        </div>
    );
};

export default Anketa;