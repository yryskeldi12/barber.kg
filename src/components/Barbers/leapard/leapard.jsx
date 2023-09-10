import React from 'react';
import './leapard.scss'
import img from './img/Group 114.png'
import img1 from './img/Rectangle 156.png'
import {AiOutlineStar} from 'react-icons/ai'
const Leapard = () => {
    return (
        <div   id="leapard">
            <div  className="container">
                <div style={{background:`url(${img})` , height:'1170px'}} className="leapard">
                    <h1>барбершопы</h1>
                    <div className="leapard--text">
                        <div className='leapard--text__texts'>
                            <div style={{background:`url(${img1})`}} className="leapard--text__texts--block">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.7</h4>
                                <div className="leapard--text__texts--block__block-text">
                                    <h2>leapard</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>
                            <div style={{background:`yellow`}} className="leapard--text__texts--block">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                                <div className="leapard--text__texts--block__block-text">
                                    <h2>Barber bro</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>

                        </div>
                        <div className="leapard--text__block1">
                            <h3>Барбершоп</h3>
                            <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                            <div className="leapard--text__block1--block-text1">
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

export default Leapard;