import React from 'react';
import './price.scss'
import have from '../../../../src/components/Barbers/price/img/блок#2/div.hair-prices-photo.png'
import have3 from '../../../../src/components/Barbers/price/img/have3.png'

const Price = () => {
    return (
        <div id="price">
            <div className="container">
                <div className="price">
                    <h1>( Цены )</h1>
                    <div className="price--we">
                        <div className="price--we__images">
                            <h2>
                                Мы изменим
                                ваш внешний вид
                            </h2>
                            <div className="price--we__images--images2">
                                <img src={have} alt=""/>
                            </div>
                            <div className="price--we__images--have3">
                                <img src={have3} alt=""/>
                            </div>
                        </div>
                        <div className="price--we__prices">
                            <h3>( Цены )</h3>
                            <div className="price--we__prices--ot">
                                <h4>Подстрич Волосы</h4>
                                <h5>от 150сом</h5>
                            </div>
                            <div className="price--we__prices--ot">
                                <h4>Помыть и высушить</h4>
                                <h5>от 100сом</h5>
                            </div>
                            <div className="price--we__prices--ot">
                                <h4>Корейская стрижка</h4>
                                <h5>от 250сом</h5>
                            </div>
                            <div className="price--we__prices--ot">
                                <h4>Европейские стрижки</h4>
                                <h5>от 200сом</h5>
                            </div>
                            <div className="price--we__prices--ot">
                                <h4>Химия</h4>
                                <h5>от 500сом</h5>
                            </div>
                            <div className="price--we__prices--ot">
                                <h4>Борода (усы)</h4>
                                <h5>от 300сом</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;