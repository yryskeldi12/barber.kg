import React from 'react';
import './barbers.scss'
import Master from './Master/master';
import Recom from './Recom/Recom';
import Leapard from "./leapard/leapard";
import React from "react";
import "./barbers.scss";
import Master from "./Master/master";
import Recom from "./Recom/Recom";
import Price from "./price/price";

const Barbers = () => {
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
