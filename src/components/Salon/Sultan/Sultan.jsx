import React from 'react';
import './Sultan.scss'
import {AiOutlineStar} from 'react-icons/ai'

const Sultan = () => {
    return (
        <div id="sultan">
            <div  className="container">
                <div  className="sultan">
                    <h1>барбершопы</h1>
                    <div className="sultan--text">
                        <div className='sultan--text__texts'>
                            <div className="sultan--text__texts--block">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.7</h4>
                                <div className="sultan--text__texts--block__block-text">
                                    <h2>leapard</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>
                            <div  className="sultan--text__texts--block">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                                <div className="sultan--text__texts--block__block-text">
                                    <h2>Barber bro</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>

                        </div>
                        <div className="sultan--text__block1">
                            <h3>Барбершоп</h3>
                            <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                            <div className="sultan--text__block1--block-text1">
                                <h2>darck star</h2>
                                <button>Смотреть</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sultan;