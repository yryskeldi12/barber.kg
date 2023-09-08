import React from 'react';
import './adviceTo.scss'
import {IoIosArrowBack} from "react-icons/io";
import key from '../../../../src/components/Blog/agviceTo/img/key.jpg'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from "react-icons/md";
const AdviceTo = () => {
    return (
        <div id="adviceTo">
            <div className="container">
                <div className="adviceTo">
                    <div className="adviceTo--second">
                        <IoIosArrowBack style={{fontSize: '30px'}}/>
                        <h3>Советы <span>30.08.2023</span></h3>
                        <h1>когда необходимо подпиливать волосы, чтобыони росли</h1>
                    </div>
                    <div className="adviceTo--images">
                        <img src={key} alt=""/>
                    </div>
                    <div className="adviceTo--three">
                        <h2>ВСЕ О ДОМАШНЕМ И САЛОННОМ УХОДЕ ЗА ВОЛОСАМИ!</h2>
                        <p>Современный салон красоты помогает реализовать естественное желание человека хорошо выглядеть, оставаться красивым и желанным. Мы рады предложить вам широкий спектр услуг по уходу за волосами. Мы знаем секрет, как подчеркнуть вашу естественную привлекательность и замедлить течение времени.Самостоятельное выполнение маникюра, хорошей укладки и макияжа отнимает много человеческих и временных ресурсов. Победителями сегодня становятся те, кто решает забежать в салон красоты по дороге на встречу или в офис. В конце концов, особенно в больших городах, остается меньше времени на утренние или даже ежедневные встречи.</p>
                        <h4>КАК ПРАВИЛЬНО УХАЖИВАТЬ ЗА ДЛИННЫМИ ВОЛОСАМИ</h4>
                        <h6>Добро пожаловать в Hairy salon. Современный салон красоты помогает реализовать естественное желание человека хорошо выглядеть, оставаться красивым и желанным. Мы рады предложить вам широкий спектр услуг по уходу за волосами. Мы знаем секрет, как подчеркнуть вашу естественную привлекательность и замедлить течение времени.Самостоятельное выполнение маникюра, хорошей укладки и макияжа отнимает много человеческих и временных ресурсов. Победителями сегодня становятся те, кто решает забежать в салон красоты по дороге на встречу или в офис. В конце концов, особенно в больших городах, остается меньше времени на утренние или даже ежедневные встречи. Что уж говорить о матерях, у которых каждая минута на вес золота.Все, особенно женщины, прекрасно осознают важность внешнего вида. Деловой образ или выбор образа для праздника, корпоративной вечеринки, свадьбы - каждый из них определяет настроение, уверенность в потенциальном успехе текущего мероприятия. В салоне красоты Hairy подберут или идеально дополнят ваш образ высококачественными услугами.
                            НАСКОЛЬКО ВАЖНЫ УСЛУГИ ПАРИКМАХЕРА</h6>
                        <h5>НАСКОЛЬКО ВАЖНЫ УСЛУГИ ПАРИКМАХЕРА</h5>
                        <p>А что, если мы скажем, что выглядеть красиво и ухоженно сегодня не такая простая задача? Самостоятельное выполнение маникюра, хорошей укладки и макияжа отнимает много человеческих и временных ресурсов. Победителями сегодня становятся те, кто решает забежать в салон красоты по дороге на встречу или в офис. В конце концов, особенно в больших городах, остается меньше времени на утренние или даже ежедневные встречи. Что уж говорить о матерях, у которых каждая минута на вес золота.Все, особенно женщины, прекрасно осознают важность внешнего вида. Деловой образ или выбор образа для праздника, корпоративной вечеринки, свадьбы - каждый из них определяет настроение, уверенность в потенциальном успехе текущего мероприятия. В салоне красоты Hairy подберут или идеально дополнят ваш образ высококачественными услугами.</p>
                    </div>
                    <div className="adviceTo--phore">
                        <MdKeyboardArrowLeft  style={{fontSize: '30px'}}/>
                        <div className="adviceTo--phore__a1">
                            <h4>Предыдущий пост</h4>
                            <h2>КАК ПРАВИЛЬНО УХАЖИВАТЬ ЗА ВАШИМ ТИПОМ И ДЛИНОЙ ВОЛОС</h2>
                        </div>
                        <h1></h1>
                        <div className="adviceTo--phore__a2">
                            <h4>Следующий пост</h4>
                            <h2>ПАРИКМАХЕРСКИЕ, КОТОРЫЕ ОТЛИЧАЮТСЯ КАЧЕСТВОМ РАБОТЫ</h2>
                        </div>

                        <MdKeyboardArrowRight className="adviceTo--phore__a2--icon" style={{fontSize: '30px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdviceTo;