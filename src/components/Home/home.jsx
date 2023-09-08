import React from 'react';
import Functional from "./functional/functional";
import Advantages from "./advantages/advantages";
import Questions from "./Questions/questions";
import Salons from "./Salons";
import Platform from "./platform/platform";
import Hero from "./Hero/hero";

const Home = () => {
    return (
        <div id='home'>
                <Hero/>
                <Functional/>
                <Advantages/>
                <Platform/>

                <Salons/>
                <Questions/>
        </div>
    );
};

export default Home;
