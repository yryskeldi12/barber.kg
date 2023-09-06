import React from 'react';
import './SalonPrice.scss'
import have from '../../../../src/components/Barbers/price/img/блок#2/div.hair-prices-photo.png'
import have3 from '../../../../src/components/Barbers/price/img/have3.png'

const SalonPrice = () => {
    return (
        <div id="SalonPrice">
            <div className="container">
                <div className="SalonPrice">
                    <h1>( Цены )</h1>
                    <div className="SalonPrice--we">
                        <div className="SalonPrice--we__images">
                            <h2>
                                Мы изменим
                                ваш внешний вид
                            </h2>
                            <div className="SalonPrice--we__images--images2">
                                <img src={have} alt=""/>
                            </div>
                            <div className="SalonPrice--we__images--have3">
                                <img src={have3} alt=""/>
                            </div>
                        </div>
                        <div className="SalonPrice--we__prices">
                            <h3>( Цены )</h3>
                            <div className="SalonPrice--we__prices--ot">
                                <h4>Подстрич Волосы</h4>
                                <h5>от 150сом</h5>
                            </div>
                            <div className="SalonPrice--we__prices--ot">
                                <h4>Помыть и высушить</h4>
                                <h5>от 100сом</h5>
                            </div>
                            <div className="SalonPrice--we__prices--ot">
                                <h4>Корейская стрижка</h4>
                                <h5>от 250сом</h5>
                            </div>
                            <div className="SalonPrice--we__prices--ot">
                                <h4>Европейские стрижки</h4>
                                <h5>от 200сом</h5>
                            </div>
                            <div className="SalonPrice--we__prices--ot">
                                <h4>Химия</h4>
                                <h5>от 500сом</h5>
                            </div>
                            <div className="SalonPrice--we__prices--ot">
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

export default SalonPrice;