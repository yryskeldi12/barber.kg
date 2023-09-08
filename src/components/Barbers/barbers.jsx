import React from 'react';
import './barbers.scss'
import Recom from './Recom/Recom';



const Barbers = () => {
    return (
        <div id='barbers'>
            <div className="container">
                <div className="barbers">
                    {/* <h1 style={{color:'white'}}>barbers</h1> */}
                    <Recom/>

                </div>
            </div>
        </div>
    );
};

export default Barbers;