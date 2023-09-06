import React from 'react';
import './questions.scss'
const Questions = () => {
    return (
        <div id="questions">
            <div className="container">
                <div className="questions">
                    <h1>( Вопросы и ответы )</h1>
                    <div className="questions--text">
                        <div className="questions--text__block lol">
                            <h2>Какие услуги доступны на платформе?</h2>
                            <p>Мы предоставляем информацию о красоте и заботе о волосах, бороде.</p>
                        </div>
                        <div className="questions--text__block">
                            <h2>Могу ли я выбрать мастера, если нет конкретных предпочтений?</h2>
                            <p>Вы можете оценивать сервисы, сравнивать, выбирать лучшее соотношение цены и качества.</p>
                        </div>
                        <div className="questions--text__block lol">
                            <h2>Какие методы оплаты доступны на платформе?</h2>
                            <p>Оплата осуществляется преимущественно в руки или картой</p>
                        </div>
                        <div className="questions--text__block">
                            <h2>Могут ли барбершопы и салоны красоты добавлять свои услуги на платформу?</h2>
                            <p>Да, достаточно зарегистрироваться в системе и добавить услуги.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;