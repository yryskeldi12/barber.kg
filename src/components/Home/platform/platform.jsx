import React from 'react';
import './platform.scss'
import white from '../../../../src/components/Home/platform/img/white.png'
import  images3 from '../../../../src/components/Home/platform/img/images3.png'
const Platform = () => {
    return (
        <div id="platform">
            <div className="container">
                <div className="platform">
                      <div className="platform--images">
                          <img src={white} alt=""/>
                      </div>
                    <div className="platform--images3">
                        <img src={images3} alt=""/>
                    </div>
                    <div className="platform--text">
                        <h1>Размещение своего барбершопа на платформе</h1>
                        <ul>
                            <li>Это бесплатно и займет всего несколько минут.</li>
                            <li>Вы получите доступ к множеству потенциальных клиентов.</li>
                            <li>У вас будет возможность отвечать на отзывы клиентов, чтобы улучшать свой бизнес.</li>
                            <li>Разместите свой салон уже сегодня, чтобы начать привлекать новых клиентов.</li>
                        </ul>
                        <button>
                            Заполнить анкету
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platform;