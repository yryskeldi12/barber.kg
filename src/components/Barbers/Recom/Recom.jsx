import React, { useState } from 'react';
import img from './img/unsplash_IxmHiUC-yOw.jpg'
import img1 from './img/Rectangle 93.png'
import img2 from './img/1.png'
import img3 from './img/2.png'
import img4 from './img/3.png'
import {AiOutlineStar} from 'react-icons/ai'
import {IoIosArrowBack , IoIosArrowForward} from 'react-icons/io'

import './Recom.scss'

const Recom = () => {
    const [slic ,setSlic] = useState(1)
    let str = img1
    let str2 = 'Талгат'
    let str3 = 'Барбер'
    if (slic === 1){
        str = img1
        str2= 'Талгат'
        str3 = 'Барбер'
    }else if (slic === 2){
        str = img2
        str2= 'Мээрим Туратова'
        str3 = 'Мастер'
    }else if (slic === 3){
        str = img3
        str2= 'Назира Б.'
        str3 = 'Парихмахер'
    }else if (slic === 4){
        str = img4
        str2= 'Аслан нурбеков'
        str3 = 'Барбер'
    }
    
    return (
        <div  id='recom'>
            <div className="container">
                <div style={{background:`url(${img})`}} className="recom">
                    <div className="recom--hello">
                    <div className="recom--hello__recom-text">
                        <h1>Опыт работы с волосами,как ни у кого другого</h1>
                        <p>Наши талантливые специалисты готовы поделиться своими секретами. Не упустите эту возможность</p>
                    </div>
                    <div className="recom--hello__block">
                       <div className="recom--hello__block--blocks">
                       <h1>Лучшие мастера недели по отзывам клиентов</h1>
                        <img src={str} alt="" />
                        <div className="recom--hello__block--blocks__flex">
                            <div>
                            <h2>{str2}</h2>
                            <h3><AiOutlineStar/>5.0</h3>
                            </div>
                            <p>{str3}</p>
                        </div>
                        <div className="recom--hello__block--blocks__flexs">
                            <button>Смотреть</button>
                            <div className='recom--hello__block--blocks__flexs--icons'>
                                <IoIosArrowBack onClick={() => slic === 1 ? setSlic(slic + 3) : setSlic(slic - 1)} style={{cursor:"pointer"}}/>
                                <IoIosArrowForward onClick={() => slic === 4 ? setSlic(slic - 3) : setSlic(slic + 1)} style={{cursor:"pointer"}}/>
                            </div>
                        </div>
                       </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recom;