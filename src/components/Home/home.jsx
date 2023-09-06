import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="home"></div>
      </div>
    </div>
  );
import React from 'react';
import Functional from "./functional/functional";
import Questions from "./Questions/questions";
import Hero from './Hero/hero';

const Home = () => {
    return (
        <div  id='home'>
            <div className="container">
                <Functional/>
                <Questions/>
                <div className="home">
                    {/* <h1 style={{color:'white'}}>home</h1> */}
                   <Hero/>
                </div>
            </div>
        </div>
    );
};

export default Home;
