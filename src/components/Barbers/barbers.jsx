import React from 'react';
import './barbers.scss'
import Master from './Master/master';

const Barbers = () => {
    return (
        <div id='barbers'>
            <div className="container">
                <div className="barbers">
                    <Master/>
                </div>
            </div>
        </div>
    );
};

export default Barbers;