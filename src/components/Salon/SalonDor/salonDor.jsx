import React from 'react';
import {AiOutlineStar} from "react-icons/ai";
import "./salonDor.scss"

const SalonDor = () => {
    return (
        <div id="runa">
            <div  className="container">
                <div  className="runa">
                    <h1>салоны красоты</h1>
                    <div className="runa--text">
                        <div className='runa--text__texts'>
                            <div className="runa--text__texts--block">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.7</h4>
                                <div className="runa--text__texts--block__block-text">
                                    <h2>runa</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>
                            <div  className="runa--text__texts--block1">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                                <div className="runa--text__texts--block__block-text">
                                    <h2>Barber bro</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>

                        </div>
                        <div className="runa--text__block1">
                            <h3>Барбершоп</h3>
                            <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                            <div className="runa--text__block1--block-text1">
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

export default SalonDor;