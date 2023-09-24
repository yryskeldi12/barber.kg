import React from "react";
import Hero from "./Hero/hero";
import Functional from "./functional/functional";
import Advantages from "./advantages/advantages";
import Platform from "./platform/platform";
import Questions from "./Questions/questions";
import Salons from './Salons';

const Home = () => {
    return (
        <div id='home'>
            <Hero />
            <Functional />
            <Advantages />
            <Platform />
            <Salons />
            <Questions />
        </div>
    );
};

export default Home;
