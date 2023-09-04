import React from 'react';
import './footer.scss'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="footer">
                    <h1>( Контакты и поддержка пользователей )</h1>
                    <div className="footer--text">
                        <div className="footer--text__name">
                            <h2>Телефон</h2>
                            <h3>0 (553) 553 406</h3>
                        </div>
                        <div className="footer--text__name">
                            <h2>Электронная почта</h2>
                            <h3>barber.kg@gmail.com</h3>
                        </div>
                        <div className="footer--text__name">
                            <h2>Instagram</h2>
                            <h3>barber_shop.kg</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;