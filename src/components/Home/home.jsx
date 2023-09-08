import React from 'react';
import Hero from './Hero/hero';
import Functional from "./functional/functional";
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

            </div>
        </div>
    );
};

export default Home;