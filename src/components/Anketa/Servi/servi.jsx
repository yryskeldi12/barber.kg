import React, { useState } from "react";
import './servi.scss'


const Servi = () => {
    const [tesk, setTesk] = useState([]);
    let str = '_ '
    let arr = str.repeat(70)
    return (
        <div id="servi">
            <div className="container">
                <h1>( Услуги мастера )</h1>
                <div className="servi">
                    <div className="servi--text">

                    </div>
                    <div className="servi--block">
                        <input type="text" placeholder='услуга'/>
                        <div><p>{arr}</p></div>
                        <input type="text" placeholder='цена'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servi;