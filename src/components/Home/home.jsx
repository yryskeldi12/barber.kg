import React from 'react';
import Functional from "./functional/functional";
import Questions from "./Questions/questions";

const Home = () => {
    return (
        <div id='home'>
            <div className="container">
                <Functional/>
                <Questions/>
            </div>
        </div>
    );
};

export default Home;