import React from "react";
import Functional from "./functional/functional";
import Questions from "./Questions/questions";
import Hero from "./Hero/hero";
import Salons from "./Salons";
import Advantages from "./advantages/advantages";
import Platform from "./platform/platform";


const Home = () => {
    return (
        <div  id='home'>
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
