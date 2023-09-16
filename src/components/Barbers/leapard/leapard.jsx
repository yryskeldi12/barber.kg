import React, {useState} from 'react';
import './leapard.scss'
import {AiOutlineStar} from 'react-icons/ai'
import img from './img/men2.png'
import img2 from './img/man1.png'
import img3 from './img/mens2.png'
import img1 from './img/mens1.png'
import img4 from './img/men3.png'
import img5 from './img/mens3.png'
import img0 from './img/men.png'
const Leapard = () => {
    const [lol , setLol] = useState(false)
    const [lol1 , setLol1] = useState(false)
    const [lol2 , setLol2] = useState(false)
    console.log(lol)
    return (
        <div style={{background:`url(${img0})` , backgroundColor:"#fff"}} id="leapard">
            <div  className="container">
                <div  className="leapard">
                    <h1>барбершопы</h1>
                    <div className="leapard--text">
                        <div className='leapard--text__texts'>
                            <div onMouseOver={() => setLol(true)} onMouseLeave={() => setLol(false)} style={{background:`url(${lol ? img1 : img})` , transition:'0.5s'}} className="leapard--text__texts--block">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.7</h4>
                                <div className="leapard--text__texts--block__block-text">
                                    <h2>leapard</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>
                            <div onMouseOver={() => setLol1(true)} onMouseLeave={() => setLol1(false)}
                                 style={{background:`url(${lol1 ? img3 : img2})`, transition:'0.5s'}}  className="leapard--text__texts--block1">
                                <h3>Барбершоп</h3>
                                <h4><AiOutlineStar style={{fontSize:"23px"}}/>4.5</h4>
                                <div className="leapard--text__texts--block__block-text">
                                    <h2>Barber bro</h2>
                                    <button>Смотреть</button>
                                </div>

                            </div>

                        </div>
                        <div style={{background:`url(${lol2 ? img5 : img4})`, transition:'0.5s'}} onMouseOver={() => setLol2(true)} onMouseLeave={() => setLol2(false)} className="leapard--text__block1">
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