import React from 'react';
import './advantages.scss'
import pen from '../../../../src/components/Home/advantages/img/pen.png'
import time from '../../../../src/components/Home/advantages/img/time.png'
import money from '../../../../src/components/Home/advantages/img/money.png'
import phone from '../../../../src/components/Home/advantages/img/phone.png'

const Advantages = () => {
    return (
        <div id="advantages">
            <div className="container">
                <div className="advantages">
                    <h1> ( Преимущества для пользователей )</h1>
                  <div className="advantages--block">
                      <div className="advantages--block__blocks">
                          <div className="advantages--block__blocks--images">
                              <img src={pen} alt=""/>
                          </div>
                          <h2>Удовлетворенность</h2>
                          <p>Вы получаете идеальные услуги по своему вкусу, а мастера получают возможность показать свои способности.</p>
                      </div>
                      <div className="advantages--block__blocks">
                          <div className="advantages--block__blocks--images">
                              <img src={time} alt=""/>
                          </div>
                          <h2>Экономия времени</h2>
                          <p>Наша сервис помогает экономить время на поиске, бронировании и выборе услуг.</p>
                      </div>
                  </div>
                  <div className="advantages--bad">
                      <div className="advantages--bad__blocks">
                          <div className="advantages--bad__blocks--images">
                              <img src={money} alt=""/>
                          </div>
                          <h2>Экономия денег</h2>
                          <p>Вы всегда знаете точную цену услуги, прежде чем сделать скучный выбор. Выберите салон или барбершоп соотношением цен и качества.</p>
                      </div>
                      <div className="advantages--bad__blocks">
                          <div className="advantages--bad__blocks--images">
                              <img src={phone} alt=""/>
                          </div>
                          <h2>Удобно и мобильно</h2>
                          <p>Используйте нашу платформу в любое время, в любом месте. Найдите лучшего мастера на пути на работу или домой.</p>
                      </div>
                  </div>

                </div>
            </div>
        </div>
    );
};

export default Advantages;