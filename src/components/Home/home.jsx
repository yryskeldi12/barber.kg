import React from 'react';
import Hero from './Hero/hero';
import Functional from "./functional/functional";
import Advantages from "./advantages/advantages";
import Platform from "./platform/platform";
import React from "react";
import Functional from "./functional/functional";
import Questions from "./Questions/questions";
import Hero from "./Hero/hero";
import Salons from "./Salons";
import Advantages from "./advantages/advantages";
import Platform from "./platform/platform";


const Home = () => {
    return (
        <div id='home'>
            <div className="container">
                <Hero/>
                <Functional/>
                <Advantages/>
                <Platform/>

                <Salons/>
                <Questions/>
            </div>
        </div>
    );
};

export default Home;
