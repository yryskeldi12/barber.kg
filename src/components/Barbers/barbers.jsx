import React from 'react';
import './barbers.scss'
import Leapard from "./leapard/leapard";
import Master from "./Master/master";
import Recom from "./Recom/Recom";
import Price from "./price/price";

const Barbers = () => {
    return (
        <div id='barbers'>
            <div className="container">
                <div className="barbers">
                    <Master/>
                    <h1 style={{color:'white'}}>barbers</h1>
                <div className="barbers">
                    {/* <h1 style={{color:'white'}}>barbers</h1> */}
                    <Recom/>

                </div>
                </div>
                </div>
        </div>
    );
  return (
    <div id="barbers">
      <Recom />
    <Leapard/>
      <Master />
      <Price />
    </div>
  );
};

export default Barbers;
