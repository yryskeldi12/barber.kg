import React from 'react';
import './barbers.scss'
import Recom from './Recom/Recom';



const Barbers = () => {
    return (
        <div id='barbers'>
                    <h1 style={{color:'white'}}>barbers</h1>
                <div className="barbers">
                    {/* <h1 style={{color:'white'}}>barbers</h1> */}
                    <Recom/>

                </div>
        </div>
    );
};

export default Barbers;