import React from 'react';
import './barbers.scss'
import Master from './Master/master';
import Recom from './Recom/Recom';
import Leapard from "./leapard/leapard";


const Barbers = () => {
    return (
        <div id='barbers'>
            <div className="container">
                <div className="barbers">
                    <Master/>
                    <h1 style={{color: 'white'}}>barbers</h1>
                    <div className="barbers">
                        {/* <h1 style={{color:'white'}}>barbers</h1> */}
                        <Recom/>
                        <Leapard/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Barbers;