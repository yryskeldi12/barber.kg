import React from 'react';
import Hero from './Hero/hero';

const Home = () => {
    return (
        <div  id='home'>
            <div className="container">
                <div className="home">
                    {/* <h1 style={{color:'white'}}>home</h1> */}
                   <Hero/>
                </div>
            </div>
        </div>
    );
};

export default Home;